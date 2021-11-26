import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { OrgUnitLoadChildrenFn } from "./org-unit-tree/org-unit-data-source";
import { OrgUnitNode } from "./org-unit.typings";

@Injectable()
export class OrgUnitLoader {

  constructor(private http: HttpClient) {
  }

  loadChildren: OrgUnitLoadChildrenFn = (node) => {
    const {id, level} = !!node ? node : {id: null, level: -1};

    return this.getNodes(id)
      .pipe(map(results => {
        return results.map(ou => {
          return {
            id: ou.id,
            name: ou.name,
            expandable: true,
            level: level + 1,
            disabled: false,
            type: ou.type
          }
        })
      }));
  };

  protected getNodes(parentId: string): Observable<OrgUnitNode[]> {
    const params: any = {};
    if (parentId) {
      params.parentId = parentId;
    }
    return this.http.get<OrgUnitNode[]>(`/system/orgUnits/tree`, { params});
  }
}
