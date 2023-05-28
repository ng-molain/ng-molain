import {OrgUnitFlatNode} from "../org-unit";
import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs";
import {Pagination} from "../pagination";


export interface UserLoader {

  userList(params: UserListQueryParams): Observable<Pagination<User>>;

  unameFind(unames: string[]): Observable<UnameFindItem[]>;

}

export const  USER_LOADER = new InjectionToken<UserLoader>("USER_LOADER");

export interface UserListQueryParams {
  searchText?: string | null;
  withChildGroup?: boolean | null;
  permissions?: string[] | null;
  scope?: OrgUnitFlatNode | null;

  page?: number | null;
  size?: number | null;
}

export interface User {
  id: string;
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  orgName: string;
  status: string;
}

export interface UnameFindItem {
  username: string;
  result: string;
  userInfo: User;
}
