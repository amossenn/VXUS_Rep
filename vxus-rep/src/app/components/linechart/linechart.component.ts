import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements AfterViewInit {
  lineschart = [];
  barschart = [];
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.lineschart = new Chart(document.getElementById('lines-canvas'), {
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
            fill: false,
            data: [{x:0, y:60.50}, {x:1, y:61.39}, {x:2, y:61.72}, {x:3, y:62.00}, {x:4, y:62.76}, {x:7, y:61.93}, {x:8, y:62.32}, {x:9, y:62.30}, {x:10, y:62.81}, {x:11, y:62.81}, {x:15, y:62.47}, {x:16, y:63.18}, {x:17, y:63.22}, {x:18, y:62.80}, {x:21, y:62.89}, {x:22, y:62.81}, {x:23, y:61.24}, {x:24, y:61.76}, {x:25, y:60.37}, {x:28, y:61.39}]
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
    this.barschart = new Chart(document.getElementById('bars-canvas'), {
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
            maxBarThickness: 4,
            barThickness: 3,
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
