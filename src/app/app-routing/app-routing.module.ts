import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from '../employee-list/employee-list.component';

const routes: Routes = [
  { path: 'employeelist', component: EmployeeListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule 
  ],
  declarations: []
})



export class AppRoutingModule { }
