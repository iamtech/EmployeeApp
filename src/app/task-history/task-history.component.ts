import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as d3 from 'd3';
import * as Chart from 'chart.js';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {
 // @ViewChild('myChart') Chart: ElementRef;
  data: any;
  dataSource;
  msgRequestUrl = 'http://localhost:8093/ticketUI/yeardata';
  msgLineDataRequestUrl = 'http://localhost:8093/ticketUI/newdata';
  restItems: any;
  restListItems: any;
  newData: any;
  myLineChart : any;

  products: Observable<any>;

  constructor(private http: HttpClient) {
    
   }

   ngOnInit() {

    let obs = this.http.get(this.msgRequestUrl);
    obs.pipe(map(data => data))
       .subscribe(restItems => {
        this.restItems = restItems;
        this.restListItems = this.restItems;
        console.log(this.restItems);
        this.displayChart();
        this.displayLineChart();
      });

   Observable.interval(5000)
      .switchMap(() => this.http.get(this.msgLineDataRequestUrl)).map((data) => data)
          .subscribe((data) => {
            this.newData=data;
            this.restListItems.push(this.newData);
            if(this.restListItems.length > 12){
              this.restListItems.shift();
            }
            
             console.log(data);
             this.myLineChart.update();
          });
      
  }

  getLineData(){
    let obsLine = this.http.get(this.msgLineDataRequestUrl);
    obsLine.pipe(map(data => data))
        .subscribe(newData => {
        this.newData = newData;
        console.log(this.newData);
        this.displayLineChart();
        });
  }

   displayChart(){
    var  ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: ["2014", "2015", "2016", "2017", "2018"],
           datasets: [{
               label: '# of Tickets per Year',
               data: this.restItems,
               backgroundColor: [
                   'rgba(255, 99, 132, 0.2)',
                   'rgba(54, 162, 235, 0.2)',
                   'rgba(255, 206, 86, 0.2)',
                   'rgba(75, 192, 192, 0.2)',
                   'rgba(153, 102, 255, 0.2)'
               ],
               borderColor: [
                   'rgba(255,99,132,1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                   'rgba(153, 102, 255, 1)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
           }
       }
   });
   console.log(myChart);
   }

   displayLineChart(){
    var  ctx = document.getElementById("myLineChart");
    this.myLineChart = new Chart(ctx, {
       type: 'line',
       data: {
           labels: ["60 sec","55 sec","50 sec", "45 sec" ,"40 sec" ,"35 sec", "30 sec","25 sec", "20 sec", "15 sec", "10 sec", "5 sec"],
           datasets: [{
               label: '# of Requests per 5 Second',
               data: this.restListItems,
               borderColor: "#3cba9f",
               fill: false
           }]
       },
       options: {
           scales: {
            yAxes: [
                {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
                }
              ]
           }
       }
   });
   console.log(this.myLineChart);
   }

}
