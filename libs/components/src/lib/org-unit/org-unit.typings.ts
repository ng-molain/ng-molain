import {OrgUnitLoadChildrenFn} from "./org-unit-tree/org-unit-data-source";
import {InjectionToken} from "@angular/core";

export interface OrgUnitLoader {
  loadChildren: OrgUnitLoadChildrenFn;
}

export const ORG_UNIT_LOADER = new InjectionToken<OrgUnitLoader>("ORG_UNIT_LOADER");

export interface OrgUnitNode {
  id: string;
  name: string,
  disabled?: boolean;
  type?: string;
  children?: OrgUnitNode[];
}

export interface OrgUnitFlatNode {
  id: string;
  name: string;
  expandable: boolean;
  level: number;
  disabled: boolean;
  type?: string;
  loading?: boolean;
}

export const transformer = (node: OrgUnitNode, level: any): OrgUnitFlatNode => {
  return {
    id: node.id,
    name: node.name,
    expandable: !!node.children && node.children.length > 0,
    level: level,
    disabled: !!node.disabled,
    type: node.type,
  };
};
