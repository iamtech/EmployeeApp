import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'name'];
  dataSource;
  msgRequestUrl = 'http://localhost:8097/profiles';
  restItems: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let obs = this.http.get(this.msgRequestUrl);
    obs.pipe(map(data => data))
       .subscribe(restItems => {
        this.restItems = restItems;
        this.dataSource = new MatTableDataSource(this.restItems)
        console.log(this.restItems);
      });
    //this.message = this.http.post(this.msgRequestUrl);
  }
  //dataSource = new MatTableDataSource(this.restItems);

  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
