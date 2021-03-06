import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { TaskHistoryComponent } from '../task-history/task-history.component';
import { ManageTasksComponent } from '../manage-tasks/manage-tasks.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent  ,
  children: [
    { path: '', redirectTo: 'employeelist', pathMatch: 'full'},
    { path: 'employeelist', component: EmployeeListComponent },
    { path: 'taskhistory', component: TaskHistoryComponent },
    { path: 'taskmanagement', component: ManageTasksComponent },
  ]},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})
  ],
  exports: [ RouterModule 
  ],
  declarations: []
})



export class AppRoutingModule { }
