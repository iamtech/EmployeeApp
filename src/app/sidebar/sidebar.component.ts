import { Component, OnInit,Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { UserService } from '../auth/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  admin: boolean;

  constructor(private _iconRegistry: MatIconRegistry, private userservice:UserService, private router:Router) { 
    
  }

  ngOnInit() {
    this.admin = this.userservice.isAdmin;
    console.log('role form SideBar comp::',this.admin);
    // If user is not admin then directly navigate to task history tab
    if(!this.admin){
      this.router.navigate(['sidebar/taskhistory'])
    }
  }

}
