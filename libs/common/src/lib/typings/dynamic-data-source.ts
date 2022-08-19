import {CollectionViewer, DataSource, SelectionChange} from "@angular/cdk/collections";
import {BehaviorSubject, firstValueFrom, isObservable, lastValueFrom, merge, Observable} from "rxjs";
import {TreeControl} from "@angular/cdk/tree";
import {map, tap} from "rxjs/operators";
import {find, filter, findIndex, remove} from 'lodash-es';

export interface FlatNode<T = any> {
  expandable: boolean;
  id: string | null; // null for virtual root node some time
  label: string;
  level: number;
  loading?: boolean;
  disabled?: boolean;
  origin?: T;

  [key: string]: any;
}

export type GetChildrenFn = (node: FlatNode) => Observable<FlatNode[]> | FlatNode[] | undefined | null;

export class DynamicDataSource implements DataSource<FlatNode> {
  private flattenedData: BehaviorSubject<FlatNode[]>;
  private childrenLoadedSet = new Set<FlatNode>();
  private getChildren: GetChildrenFn = (node => undefined);

  constructor(private treeControl: TreeControl<FlatNode>, getChildren: GetChildrenFn, initData: FlatNode[] = []) {
    this.flattenedData = new BehaviorSubject<FlatNode[]>(initData);
    treeControl.dataNodes = initData;
    this.getChildren = getChildren;
  }

  reset(initData: FlatNode[] = []) {
    this.childrenLoadedSet.clear();
    this.flattenedData.next(initData);
    this.treeControl.dataNodes = initData;
  }

  connect(collectionViewer: CollectionViewer): Observable<FlatNode[]> {
    const changes: any[] = [
      collectionViewer.viewChange,
      this.treeControl.expansionModel.changed.pipe(tap(change => this.handleExpansionChange(change))),
      this.flattenedData
    ];
    return merge(...changes).pipe(map(() => this.expandFlattenedNodes(this.flattenedData.getValue())));
    ;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.flattenedData.complete();
  }

  expandFlattenedNodes(nodes: FlatNode[]): FlatNode[] {
    const treeControl = this.treeControl;
    const results: FlatNode[] = [];
    const currentExpand: boolean[] = [];
    currentExpand[0] = true;

    nodes.forEach(node => {
      let expand = true;
      for (let i = 0; i <= treeControl.getLevel(node); i++) {
        expand = expand && currentExpand[i];
      }
      if (expand) {
        results.push(node);
      }
      if (treeControl.isExpandable(node)) {
        currentExpand[treeControl.getLevel(node) + 1] = treeControl.isExpanded(node);
      }
    });
    return results;
  }

  handleExpansionChange(change: SelectionChange<FlatNode>): void {
    if (change.added) {
      change.added.forEach(node => this.loadChildren(node));
    }
  }

  loadChildren(node: FlatNode, force: boolean = false): Promise<any> {
    if (this.childrenLoadedSet.has(node) && !force) {
      return new Promise(resolve => resolve(false));
    }
    // console.log("load children ...")
    node.loading = true;

    const onChildrenLoaded = (children: FlatNode[] | undefined | null) => {
      node.loading = false;

      const flattenedData = this.flattenedData.getValue();
      if (!children || children.length === 0) {
        this.removeAllChildren(flattenedData, node, true);
        return;
      }

      // const flattenedData = this.flattenedData.getValue();
      const index = flattenedData.indexOf(node);
      if (index === -1) {
        return;
      }
      // if (index !== -1) {
      //   flattenedData.splice(index + 1, 0, ...children);
      //   this.childrenLoadedSet.add(node);
      // }
      // this.flattenedData.next(flattenedData);
      const existsChildren = this.resolveChildren(node);
      const discardedNodes = existsChildren.filter(it => !children.some(c => c.id === it.id));

      // console.log(existsChildren, children);
      // console.log('new children', children)
      let actIndex = index;
      children.forEach(it => {
          const existsNode = existsChildren.find(e => e.id === it.id);
          if (existsNode) {
            const moveNodes = this.moveNode(flattenedData, existsNode, actIndex + 1);
            actIndex += moveNodes ? moveNodes.length : 0;
          } else {
            flattenedData.splice(actIndex + 1, 0, it);
            actIndex += 1;
          }
      });
      discardedNodes.forEach(it => this.removeNode(flattenedData, it));
      this.childrenLoadedSet.add(node);
      this.flattenedData.next(flattenedData);
    };

    const children$ = this.getChildren(node);
    if (isObservable(children$)) {
      return firstValueFrom(children$.pipe(tap(onChildrenLoaded)));
    } else {
      return new Promise<any>(resolve => {
        resolve(onChildrenLoaded(children$));
      })
    }
  }

  refresh(node: FlatNode): Promise<any> {
    return this.loadChildren(node, true)
  }

  resolveChildren(node: FlatNode): FlatNode[] {
    const flattenedData = this.flattenedData.getValue();
    const index = flattenedData.indexOf(node);
    // console.log(index)
    if (index === -1) {
      return [];
    }
    const nextSiblingIndex = findIndex(flattenedData, it => (it.level <= node.level), index + 1);
    // console.log(nextSiblingIndex, node.level, flattenedData)
    const children: FlatNode[] = filter(flattenedData, (it, i) => (i > index && (nextSiblingIndex === -1 || i < nextSiblingIndex) && it.level === node.level + 1));
    return children;
  }

  resolveAllChildren(node: FlatNode) {
    const flattenedData = this.flattenedData.getValue();
    const index = flattenedData.indexOf(node);
    if (index === -1) {
      return [];
    }
    const nextSiblingIndex = findIndex(flattenedData, it => (it.level <= node.level), index + 1);
    if (nextSiblingIndex >= 0) {
      return flattenedData.slice(index + 1, nextSiblingIndex);
    } else {
      return flattenedData.slice(index + 1)
    }
  }

  private removeAllChildren(flattenedData: FlatNode[], node: FlatNode, emitEvent: boolean = false) {
    // const flattenedData = this.flattenedData.getValue();
    this.childrenLoadedSet.delete(node);
    const children = this.resolveAllChildren(node);
    children.forEach(it => this.childrenLoadedSet.delete(it));
    remove(flattenedData, it => children.includes(it));
    if (emitEvent) {
      this.flattenedData.next(flattenedData);
    }
  }

  private removeNode(flattenedData: FlatNode[], node: FlatNode, emitEvent: boolean = false) {
    this.removeAllChildren(flattenedData, node);

    this.childrenLoadedSet.delete(node);
    // const flattenedData = this.flattenedData.getValue();
    const index = flattenedData.indexOf(node);
    if (index !== -1) {
      flattenedData.splice(index, 1);
    }
    if (emitEvent) {
      this.flattenedData.next(flattenedData);
    }
  }

  // TODO 考虑 level 变化，如果不处理会有bug, 另外封装一个方法对外暴露以处理level的问题
  private moveNode(flattenedData: FlatNode[], node: FlatNode, toIndex: number, emitEvent: boolean = false): FlatNode[] | undefined {
    // const flattenedData = this.flattenedData.getValue();
    const index = flattenedData.indexOf(node);
    if (index === -1) {
      return;
    }
    const nextSiblingIndex = findIndex(flattenedData, it => (it.level <= node.level), index + 1);
    // if (toIndex === index || (toIndex > index && nextSiblingIndex >= 0 && toIndex < nextSiblingIndex)) {
    if (toIndex > index && nextSiblingIndex >= 0 && toIndex < nextSiblingIndex) {
      // 未移动 或者 不能从父级移动到子级
      // TODO emitError?
      return;
    }

    let moveNodes: FlatNode[] = [];
    if (nextSiblingIndex >= 0) {
      moveNodes = flattenedData.splice(index, nextSiblingIndex - index);
    } else {
      moveNodes = flattenedData.splice(index);
    }

    flattenedData.splice((toIndex > index ? toIndex - moveNodes.length : toIndex), 0, ...moveNodes);
    if (emitEvent) {
      this.flattenedData.next(flattenedData);
    }

    return moveNodes;
  }
}
