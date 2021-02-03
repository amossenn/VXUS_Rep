import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linebarchart',
  templateUrl: './linebarchart.component.html',
  styleUrls: ['./linebarchart.component.css']
})
export class LinebarchartComponent implements AfterViewInit {
  linechart = [];
  barchart = [];
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.linechart = new Chart(document.getElementById('line-canvas'), {
      type: 'line',
      data: {
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        datasets : [
          {
            label: "VXUS",
            borderColor: "#50e3c2",
            lineTension: 0,
            fill: false,
            data: [{x:0, y:60.50}, {x:1, y:61.39}, {x:2, y:61.72}, {x:3, y:62.00}, {x:4, y:62.76}, {x:7, y:61.93}, {x:8, y:62.32}, {x:9, y:62.30}, {x:10, y:62.81}, {x:11, y:62.81}, {x:15, y:62.47}, {x:16, y:63.18}, {x:17, y:63.22}, {x:18, y:62.80}, {x:21, y:62.89}, {x:22, y:62.81}, {x:23, y:61.24}, {x:24, y:61.76}, {x:25, y:60.37}, {x:28, y:61.39}]
          },
          {
            label: "Benchmark",
            borderColor: "rgba(0,0,0,1)",
            lineTension: 0,
            fill: false,
            data: [{x:0, y:60.50}, {x:1, y:61.33}, {x:2, y:61.54}, {x:3, y:61.91}, {x:4, y:62.59}, {x:7, y:61.93}, {x:8, y:62.30}, {x:9, y:62.32}, {x:10, y:62.73}, {x:11, y:61.86}, {x:15, y:62.53}, {x:16, y:63.12}, {x:17, y:63.14}, {x:18, y:62.75}, {x:21, y:62.82}, {x:22, y:62.61}, {x:23, y:61.31}, {x:24, y:61.63}, {x:25, y:60.29}, {x:28, y:61.41}]
          }
        ],
        options: {
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                display: false
              }
            }]
          }
        }
      }
    })
    this.barchart = new Chart(document.getElementById('bar-canvas'), {
      type: 'bar',
      data: {
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
        datasets : [
          {
            label: "PREMIUM/DISCOUNT",
            backgroundColor: "rgba((128, 128, 128,1)",
            borderColor: "rgba(128, 128, 128,1)",
            data: [{x:0, y:-0.01}, {x:1, y:0.10}, {x:2, y:0.28}, {x:3, y:0.14}, {x:4, y:0.26}, {x:7, y:-0.01}, {x:8, y:0.02}, {x:9, y:-0.04}, {x:10, y:0.12}, {x:11, y:1.50}, {x:15, y:-0.10}, {x:16, y:0.09}, {x:17, y:0.12}, {x:18, y:0.07}, {x:21, y:0.10}, {x:22, y:0.31}, {x:23, y:-0.12}, {x:24, y:0.20}, {x:25, y:0.12}, {x:28, y:-0.04}]
          }
        ],
        options: {
          responsive: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                display: false
              }
            }]
          }
        }
      }
    })
    this.cdr.detectChanges();
  }

}
