import {FlatTreeControl} from "@angular/cdk/tree";
import {FlatNode} from "./dynamic-data-source";

export function createTreeControl(): FlatTreeControl<FlatNode> {
  return new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );
}
