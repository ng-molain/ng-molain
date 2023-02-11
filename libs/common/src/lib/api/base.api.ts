import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Page, Pageable, Pagination} from "@ng-molain/components";

export abstract class BaseApi<M, ID> {
  protected abstract readonly httpClient: HttpClient;
  protected abstract readonly baseUrl: string;

  pageList(params: any & Pageable = {}): Observable<Pagination<M>> {
    return this.httpClient.get<Pagination<M>>(`${this.baseUrl}`, {params}).pipe(
      map(value => Page.of(value))
    );
  }

  getById(id: ID): Observable<M> {
    return this.httpClient.get<M>(`${this.baseUrl}/${id}`);
  }

  create(payload: Partial<M>): Observable<M> {
    return this.httpClient.post<M>(`${this.baseUrl}`, payload);
  }

  updateById(id: ID, payload: Partial<M>): Observable<M> {
    return this.httpClient.put<M>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: ID | ID[]): Observable<void> {
    const params: any = {
      ids: Array.isArray(id) ? id : [id]
    };
    return this.httpClient.delete<void>(`${this.baseUrl}`, {params});
  }
}
