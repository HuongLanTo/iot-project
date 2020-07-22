import { Component, OnInit, Input, Output, SimpleChange, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalPage: number
  @Input() showPages: number

  @Output() pageEmit = new EventEmitter<number>()

  public startPage: number;
  public endPage: number;
  public pages = [];
  public currentPage: number;

  constructor() { }

  async ngOnInit() {
    // this.currentPage = 1;
    // await this.pagination(this.currentPage);
  }

  async ngOnChanges(changes: SimpleChange) {       
    this.currentPage = 1;
    await this.pagination(this.currentPage);
  }

  pagination(currentPage){
    // if(currentPage<1)
    //   currentPage = 1;
    // if(currentPage>this.totalPage)
    //   currentPage = this.totalPage;
    // if(this.totalPage==1)
    //   currentPage = 1
    this.currentPage = currentPage,
    this.endPage = this.currentPage + Math.floor(this.showPages / 2) > this.totalPage ? this.totalPage : this.currentPage + Math.floor(this.showPages / 2);
    this.startPage = this.endPage - this.showPages + 1 < 1 ? 1 : this.endPage - this.showPages + 1;
    this.endPage = this.startPage == 1 ? (this.startPage + this.showPages - 1 > this.totalPage ? this.totalPage : this.startPage + this.showPages - 1) : this.endPage;
    // console.log(this.currentPage, this.startPage, this.endPage, this.totalPage);
    this.pages = Array.from(Array(this.endPage - this.startPage + 1), (value, index) =>{
      return this.startPage + index;
    });
    
    this.pageEmit.emit(currentPage);
  }

}
