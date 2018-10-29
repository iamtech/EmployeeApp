import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as d3 from 'd3';
import * as Chart from 'chart.js';

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
  restItems: any;
  
  constructor(private http: HttpClient) {
   }

   ngOnInit() {

    let obs = this.http.get(this.msgRequestUrl);
    obs.pipe(map(data => data))
       .subscribe(restItems => {
        this.restItems = restItems;
        console.log(this.restItems);
        this.displayChart();
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

}
