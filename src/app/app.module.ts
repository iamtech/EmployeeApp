import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TaskHistoryComponent } from './task-history/task-history.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AuthService } from './auth/auth.service'
import { TokenStorage } from './auth/token.storage'
import { Interceptor } from "./auth/inteceptor";
import { UserService } from './auth/user.service'



import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
  MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
  MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
  MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule, MatTableModule,MatCheckboxModule } from '@angular/material';

  import 'hammerjs';
import { LoginComponent } from './login/login.component';
  
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TaskHistoryComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatInputModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [AuthService, TokenStorage,UserService,
    {provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi : true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
