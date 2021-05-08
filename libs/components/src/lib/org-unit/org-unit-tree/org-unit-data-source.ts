import {CollectionViewer, DataSource, SelectionChange} from "@angular/cdk/collections";
import {OrgUnitFlatNode} from "../org-unit.typings";
import {BehaviorSubject, merge, Observable} from "rxjs";
import {TreeControl} from "@angular/cdk/tree";
import {map, tap} from "rxjs/operators";

export type OrgUnitLoadChildrenFn = (node: OrgUnitFlatNode) => Observable<OrgUnitFlatNode[]>;

export class OrgUnitDataSource implements DataSource<OrgUnitFlatNode>{
  private flattenedData: BehaviorSubject<OrgUnitFlatNode[]>;
  private childrenLoadedSet = new Set<OrgUnitFlatNode>();

  constructor(private treeControl: TreeControl<OrgUnitFlatNode>, private getChildren: OrgUnitLoadChildrenFn, initData: OrgUnitFlatNode[]) {
    this.flattenedData = new BehaviorSubject<OrgUnitFlatNode[]>(initData);
    treeControl.dataNodes = initData;
  }

  connect(collectionViewer: CollectionViewer): Observable<OrgUnitFlatNode[] | ReadonlyArray<OrgUnitFlatNode>> {
    const  changes = [
      collectionViewer.viewChange,
      this.treeControl.expansionModel.changed.pipe(tap(change => this.handleExpansionChange(change))),
      this.flattenedData
    ];

    return merge(...changes).pipe(
      map(() => {
        return this.expandFlattenedNodes(this.flattenedData.getValue())
      })
    );
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.flattenedData.complete();
  }

  expandFlattenedNodes(nodes: OrgUnitFlatNode[]): OrgUnitFlatNode[] {
    const treeControl = this.treeControl;
    const results: OrgUnitFlatNode[] = [];
    const currentExpand: boolean[] = [];
    currentExpand[0] = true;

    nodes.forEach((node) => {
      let expand = true;
      for (let i = 0; i<= treeControl.getLevel(node); i++) {
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

  handleExpansionChange(change: SelectionChange<OrgUnitFlatNode>): void {
    if (change.added) {
      change.added.forEach((node) => this.loadChildren(node));
    }
  }

  loadChildren(node: OrgUnitFlatNode): void {
    if (this.childrenLoadedSet.has(node)) {
      return ;
    }
    node.loading = true;

    this.getChildren(node).subscribe((children) => {
      node.loading = false;
      const flattenedData = this.flattenedData.getValue();
      const index = flattenedData.indexOf(node);
      if (index !== -1) {
        flattenedData.splice(index + 1, 0, ...children);
        this.childrenLoadedSet.add(node);
      }

      this.flattenedData.next(flattenedData);
    });
  }

  setData(nodes: OrgUnitFlatNode[]) {
    this.flattenedData.next(nodes);
    // this.treeControl.dataNodes = nodes;
  }
}
