import { Component, OnInit, Input, Output, SimpleChange, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  // @Input() totalPage: number
  // @Input() showPages: number

  // @Output() pageEmit = new EventEmitter<number>()
  // public startPage: number;
  // public endPage: number;
  // public pages = [];
  // public currentPage: number;

  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 5;
  @Input() maxPages = 5;
  @Input() totalPages: number;
  @Output() pageEmit = new EventEmitter<number>();

  pager: any = {};
  currentPage = 1;

  constructor() { }

  async ngOnInit() {
    this.currentPage = 1;
    await this.pagination(this.currentPage);
    if (this.items && this.items.length) {
      this.setPage(1);
  }
    this.setPage(1);
  }

  async ngOnChanges(changes: any) {    
    console.log(changes);
    
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
  }
  }

  pagination(currentPage){
    // if(currentPage<1)
    //   currentPage = 1;
    // if(currentPage>this.totalPage)
    //   currentPage = this.totalPage;
    // if(this.totalPage==1)
    //   currentPage = 1
    // this.currentPage = currentPage,
    // this.endPage = this.currentPage + Math.floor(this.showPages / 2) > this.totalPage ? this.totalPage : this.currentPage + Math.floor(this.showPages / 2);
    // this.startPage = this.endPage - this.showPages + 1 < 1 ? 1 : this.endPage - this.showPages + 1;
    // this.endPage = this.startPage == 1 ? (this.startPage + this.showPages - 1 > this.totalPage ? this.totalPage : this.startPage + this.showPages - 1) : this.endPage;
    // // console.log(this.currentPage, this.startPage, this.endPage, this.totalPage);
    // this.pages = Array.from(Array(this.endPage - this.startPage + 1), (value, index) =>{
    //   return this.startPage + index;
    // });
    // this.pageEmit.emit(currentPage);
  }

  async setPage(page: number) {
    // get new pager object for specified page
    await this.pageEmit.emit(page);
    // await this.total.emit(this.totalPages);
    this.pager = await this.paginate(this.totalPages, page, this.pageSize, this.maxPages);

    // get new page of items from items array
    // var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
    var pageOfItems = this.items;

    // call change page function in parent component
    await this.changePage.emit(pageOfItems);
    console.log(this.totalPages);
    console.log(pageOfItems);
    console.log(page);
    
    
    
    
  }

  paginate(totalItems, currentPage, pageSize, maxPages) {
    if (currentPage === void 0) { currentPage = 1; }
    if (pageSize === void 0) { pageSize = 10; }
    if (maxPages === void 0) { maxPages = 10; }
    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);
    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    }
    else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    var startPage, endPage;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // total pages more than max so calculate start and end pages
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        }
        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        }
        else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    // return object with all pager properties required by the view
    console.log(pages);
    
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}

}
