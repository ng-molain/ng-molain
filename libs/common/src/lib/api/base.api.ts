import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Page, Pageable, Pagination} from "@ng-molain/components";
import {ParamMap, subst} from "urlcat";

export interface ApiOptions {
  pathVariables?: ParamMap;
}

export abstract class BaseApi<M, ID> {
  protected abstract readonly httpClient: HttpClient;
  /**
   * 支持路径参数，参考 ApiOptions.pathVariables
   * 使用 urlcat（https://urlcat.org/）来处理路径参数
   * @protected
   */
  protected abstract readonly baseUrl: string;

  protected getBaseUrl(options?: ApiOptions) {
    const params = (options?.pathVariables) ?? {};
    return subst(this.baseUrl, params);
  }

  pageList(params: any & Pageable = {}, options?: ApiOptions): Observable<Pagination<M>> {
    return this.httpClient.get<Pagination<M>>(`${this.getBaseUrl(options)}`, {params}).pipe(
      map(value => Page.of(value))
    );
  }

  getById(id: ID, options?: ApiOptions): Observable<M> {
    return this.httpClient.get<M>(`${this.getBaseUrl(options)}/${id}`);
  }

  create(payload: Partial<M>, options?: ApiOptions): Observable<M> {
    return this.httpClient.post<M>(`${this.getBaseUrl(options)}`, payload);
  }

  updateById(id: ID, payload: Partial<M>, options?: ApiOptions): Observable<M> {
    return this.httpClient.put<M>(`${this.getBaseUrl(options)}/${id}`, payload);
  }

  delete(id: ID | ID[], options?: ApiOptions): Observable<void> {
    const params: any = {
      ids: Array.isArray(id) ? id : [id]
    };
    return this.httpClient.delete<void>(`${this.getBaseUrl(options)}`, {params});
  }
}
