import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HiComponent } from './hi/hi.component';
import { CalComponent } from './cal/cal.component';
import { Cal2Component } from './cal2/cal2.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';

const routes: Routes = [
  {
    path: 'hi',
    component: HiComponent
  },
  {
  path: 'cal',
  component: CalComponent
  },
  {
    path: 'cal2',
    component: Cal2Component
  },
  {
    path: 'progress-bar',
    component: ProgressBarComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    CalComponent,
    Cal2Component,
    ProgressBarComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [RouterModule],
})
export class AppModule { }
