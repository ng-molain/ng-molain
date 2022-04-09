import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {sortBy, sortedUniq} from "lodash-es";
import {Page, Pageable, Pagination} from "./pagination.typings";


const DEFAULT_PAGE_SIZE_OPTIONS: number[] = [10, 20, 50, 100, 200, 500, 1000];


@Component({
  selector: 'ml-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  private _page?: Pagination;
  @Input() set page(value: Pagination | undefined) {
    if (!value) {
      return ;
    }
    const {number, size, totalElements, content} = value;
    this._page = new Page(number, size, totalElements, content);
  }
  get page(): Pagination | undefined {
    return this._page;
  }
  @Output() switchPage = new EventEmitter<Pageable>();

  inputPageNumber?: number;

  constructor() { }

  ngOnInit(): void {
  }

  get sizeOptions(): number[] {
    if (!this.page) {
      return [...DEFAULT_PAGE_SIZE_OPTIONS];
    }

    const {size, totalElements} = this.page;
    // let validOptions = size > 0 ? [...DEFAULT_PAGE_SIZE_OPTIONS, size] : [...DEFAULT_PAGE_SIZE_OPTIONS];
    // validOptions = uniq(validOptions);
    let validOptions = [...DEFAULT_PAGE_SIZE_OPTIONS];
    const sliceIndex = validOptions.findIndex(it => it > totalElements);
    validOptions = validOptions.slice(0, sliceIndex > 0 ? sliceIndex + 1 : validOptions.length);
    validOptions.push(size);
    return sortedUniq(sortBy(validOptions));
  }

  toPage(number: number) {
    if (!this.page) {
      return ; // Error
    }
    this.page.number = number;
    const n = Math.max(0, Math.min((this.page?.totalPages || 1) -1, number));
    this.switchPage.emit({page: number, size: (this.page?.size || 10)});
  }

  toFirstPage() {
    this.toPage(0);
  }

  toPrevPage() {
    this.toPage(Math.max(0, (this.page?.number || 0) -1));
  }

  toNextPage() {
    this.toPage(Math.min((this.page?.totalPages || 1) - 1, (this.page?.number || 0) + 1));
  }

  toLastPage() {
    this.toPage((this.page?.totalPages || 1) - 1);
  }

  setPageSize($event: number) {
    if (!this.page || $event < 0) {
      return ; // Error
    }

    this.page.size = $event;
    this.toPage(0);
  }
}
