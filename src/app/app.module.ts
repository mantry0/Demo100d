import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HiComponent } from './hi/hi.component';
import { CalComponent } from './cal/cal.component';
import { Cal2Component } from './cal2/cal2.component';


import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{
  path:"cal2  ",component:Cal2Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    CalComponent,
    Cal2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
