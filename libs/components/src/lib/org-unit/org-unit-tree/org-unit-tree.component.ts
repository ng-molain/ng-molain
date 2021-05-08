import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {OrgUnitFlatNode, OrgUnitNode, transformer} from "../org-unit.typings";
import {FlatTreeControl} from "@angular/cdk/tree";
import {NzTreeFlatDataSource, NzTreeFlattener} from "ng-zorro-antd/tree-view";
import {EMPTY, interval, Subject} from "rxjs";
import {throttle} from "rxjs/operators";
import {OrgUnitDataSource, OrgUnitLoadChildrenFn} from "./org-unit-data-source";
import {OUS} from "../ou.data";
import {OrgUnitLoader} from "../org-unit-loader";
import {isEmpty} from "lodash-es";

@Component({
  selector: 'system-ui-org-unit-tree',
  templateUrl: './org-unit-tree.component.html',
  styleUrls: ['./org-unit-tree.component.scss']
})
export class OrgUnitTreeComponent implements OnInit, AfterViewInit, OnDestroy {

  private _nodeClickSubject = new Subject<{node: OrgUnitFlatNode, $event: MouseEvent}>();

  transformer = transformer;
  selection: SelectionModel<OrgUnitFlatNode>;
  treeControl = new FlatTreeControl<OrgUnitFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlatter = new NzTreeFlattener<OrgUnitNode, OrgUnitFlatNode>(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  // dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlatter);

  hasChildren = (_: number, node: OrgUnitFlatNode) => node.expandable;

  @Input() checkboxVisible: boolean = false;

  _multipleSelect: boolean = false;
  @Input() set multipleSelect(multiple: boolean) {
    if (this._multipleSelect !== multiple) {
      this._multipleSelect = multiple;
      this._updateSelectionMode(multiple);
    }
  }

  @Output() selectionChange = new EventEmitter<OrgUnitFlatNode | OrgUnitFlatNode[]>();

  dataSource: OrgUnitDataSource;
  @Input() set loadChildrenFn(loadChildrenFn: OrgUnitLoadChildrenFn) {
    this._updateDataSource(loadChildrenFn);
  }

  @Input() keepSelection: boolean = false;
  @Input() searchVisible: boolean = false;

  constructor(private orgUnitLoader: OrgUnitLoader) {
    this._updateSelectionMode(false);
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    // this.dataSource.setData(OUS);
    if (!this.dataSource) {
      this._updateDataSource(this.orgUnitLoader.loadChildren);
    }

    this._registerNodeClickSubscription();
  }

  ngOnDestroy(): void {
    if (this._nodeClickSubject) {
      this._nodeClickSubject.unsubscribe();
    }
  }

  private _updateDataSource(loadChildrenFn: OrgUnitLoadChildrenFn) {
    this.dataSource = new OrgUnitDataSource(this.treeControl, loadChildrenFn, []);
    // load root
    loadChildrenFn(null).subscribe(nodes => {
      this.dataSource.setData(nodes);
      if (isEmpty(nodes)) {
        return;
      }

      if (nodes.length === 1) {
        this.treeControl.expand(nodes[0]);
      }

      if (this.keepSelection && this.selection.isEmpty()) {
        this.toggleSelection(nodes[0])
      }
    });
  }

  private _updateSelectionMode(_multiple: boolean): void {
    if (this.selection && this.selection.isMultipleSelection() === _multiple) {
      return;
    }

    const oldSelection = this.selection;

    this.selection = new SelectionModel<OrgUnitFlatNode>(_multiple);
    this._registerSelectionChangeEvent();

    if (!!oldSelection) {
      oldSelection.changed.unsubscribe();
    }
  }

  private _registerNodeClickSubscription() {
    this._nodeClickSubject.asObservable()
      .pipe(
        throttle(ev => interval(500))
      )
      .subscribe(({node, $event}) => {

        if (this.selection.isSelected(node) && !this._multipleSelect && this.keepSelection) {
          return ;
        }
        this.selection.toggle(node);
      });
  }

  private _registerSelectionChangeEvent() {
    this.selection.changed.subscribe((_) => {
      if (this.selection.isMultipleSelection()) {
        this.selectionChange.emit(this.selection.selected);
      } else {
        if (this.selection.isEmpty()) {
          this.selectionChange.emit(null);
        } else {
          this.selectionChange.emit(this.selection.selected[0]);
        }
      }
    });
  }

  getNode(id: string): OrgUnitFlatNode | null {
    return this.treeControl.dataNodes.find(n => n.id === id) || null;
  }

  toggleSelection(node: OrgUnitFlatNode, $event?: MouseEvent) {
    this._nodeClickSubject.next({node, $event});
  }

  toggleExpanded(node: OrgUnitFlatNode, $event: MouseEvent) {
    this.treeControl.toggle(node);
  }

  descendantsAllSelected(node: OrgUnitFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return (
      descendants.length > 0 &&
      descendants.every(child => {
        return this.selection.isSelected(child);
      })
    );
  }

  descendantsPartiallySelected(node: OrgUnitFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.selection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  leafItemSelectionToggle(node: OrgUnitFlatNode): void {
    this.selection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  itemSelectionToggle(node: OrgUnitFlatNode): void {
    this.selection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.selection.isSelected(node)
      ? this.selection.select(...descendants)
      : this.selection.deselect(...descendants);

    descendants.forEach(child => this.selection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: OrgUnitFlatNode): void {
    let parent: OrgUnitFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkRootNodeSelection(node: OrgUnitFlatNode): void {
    const nodeSelected = this.selection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.selection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.selection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.selection.select(node);
    }
  }

  getParentNode(node: OrgUnitFlatNode): OrgUnitFlatNode | null {
    const currentLevel = node.level;

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (currentNode.level < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}
