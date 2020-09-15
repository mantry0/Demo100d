import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
   templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css'],
})
export class CalComponent implements OnInit{
  a: number;
  b: number;
  kq = 0;
  constructor() { }
  chon = '+';
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {

  }

// chon phep tinh
  // tslint:disable-next-line:typedef
  Select(chon){
    this.chon = chon.target.value;
    // console.log(this.chon);
    // console.log(this.a);
    // console.log(this.b);

  }
  // Tinhs toan
  // tslint:disable-next-line:typedef
  Action()
  {
    if (this.a == null || this.b == null)
    {
      return false;
    }
    switch (this.chon) {
      case '+': {
        this.kq = this.a + this.b;
        break;
      }
      case '-': {
        this.kq = this.a - this.b;
        break;
      }
      case 'x': {
        this.kq = this.a * this.b;
        break;
      }
      case '/': {
        this.kq = this.a / this.b;
        break;
      }
    }}

}
