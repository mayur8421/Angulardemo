import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( ) {
   }

  ngOnInit(): void {
  }
  
    barChartOptions: ChartOptions = {
      responsive: true,
    };
    barChartLabels: Label[] = ["IT", "QA","HR","Account","Dec","Mar","Sales"];
    barChartType: ChartType = 'bar';
    barChartLegend = true;
    barChartPlugins = [];
  
    barChartData: ChartDataSets[] = [
      { data: [45, 37, 60, 70, 46, 33], label: 'Numbers of employee by department' }
    ];
  
}
