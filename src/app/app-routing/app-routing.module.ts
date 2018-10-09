import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { TaskHistoryComponent } from '../task-history/task-history.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

const routes: Routes = [
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'taskhistory', component: TaskHistoryComponent },
  { path: 'sidebar', component: SidebarComponent }
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
