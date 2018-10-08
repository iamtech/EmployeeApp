import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TaskHistoryComponent } from './task-history/task-history.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TaskHistoryComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
