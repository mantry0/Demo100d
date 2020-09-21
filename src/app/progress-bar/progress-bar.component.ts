import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  // templateUrl: './progress-bar.component.html',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styleUrls: ['./progress-bar.component.css'],
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit,  OnChanges {

  @Input() progress = 15;
  @Input() backgroundColor = '#9e9e9e';
  @Input() progressColor = '#2e8b57';
  // @Input() backgroundColor: string;
  // @Input() progressColor: string;
  // @Input() progress = 50;
  constructor() {}

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if ("progress" in changes) {
      if (typeof changes["progress"].currentValue !== "number") {
        const progress = Number(changes["progress"].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {}

}
