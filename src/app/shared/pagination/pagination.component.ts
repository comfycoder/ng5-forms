import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  totalCount: number = 0;
  totalPages: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;
  pageInput: string = '1';
  startItem: number = 0;
  endItem: number = 0;
  isFirstPage: boolean = true;
  isLastPage: boolean = true;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  first($event) {

    $event.preventDefault();

    const newPageNumber = 1;

    this.setPagingInfo(this.totalCount, this.pageSize, newPageNumber);

    this.pageChange.emit(this.pageNumber);
  }

  previous($event) {

    $event.preventDefault();

    const newPageNumber = this.pageNumber - 1;

    this.setPagingInfo(this.totalCount, this.pageSize, newPageNumber);

    this.pageChange.emit(this.pageNumber);
  }

  next($event) {

    $event.preventDefault();

    const newPageNumber = this.pageNumber + 1;

    this.setPagingInfo(this.totalCount, this.pageSize, newPageNumber);

    this.pageChange.emit(this.pageNumber);
  }

  last($event) {

    $event.preventDefault();

    const newPageNumber = this.totalPages;

    this.setPagingInfo(this.totalCount, this.pageSize, newPageNumber);

    this.pageChange.emit(this.pageNumber);
  }

  onBlur($event) {

    const input = $event.target.value;

    if (input && input.length > 0) {

      const normalizedInput = input.replace(/[^\d]/g, '');

      this.pageInput = normalizedInput;
      this.pageNumber = parseInt(normalizedInput, 10);
    }
    else {
      this.pageInput = '1';
      this.pageNumber = 1;
    }
  }

  setPageNumber($event) {

    if ($event && $event.target && $event.target.type === 'text') {
      const input = $event.target.value;
      this.pageNumber = parseInt(input, 10);
    }

    $event.preventDefault();

    this.setPagingInfo(this.totalCount, this.pageSize, this.pageNumber);

    this.pageChange.emit(this.pageNumber);
  }

  setPagingInfo(totalCount: number, pageSize: any, pageNumber: number) {

    this.totalCount = totalCount;

    this.pageSize = parseInt(pageSize, 10);

    this.pageNumber = pageNumber;

    this.totalPages = Math.ceil(totalCount / pageSize);

    if (pageNumber <= 1) {
      this.pageNumber = 1;
    }
    else if (pageNumber >= this.totalPages) {
      this.pageNumber = this.totalPages;
    }
    else {
      this.pageNumber = pageNumber;
    }

    this.pageInput = this.pageNumber.toString(10);

    this.isFirstPage = this.pageNumber === 1;

    this.isLastPage = this.pageNumber === this.totalPages;

    this.startItem = this.pageSize * (this.pageNumber - 1) + 1;

    if (this.pageNumber > 1) {
      this.endItem = (this.pageSize * (this.pageNumber - 1)) + this.pageSize;
    }
    else {
      this.endItem = this.pageSize;
    }

    if (this.endItem > totalCount) {
      this.endItem = totalCount;
    }
  }
}
