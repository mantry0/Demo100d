import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
