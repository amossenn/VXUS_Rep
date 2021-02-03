import { Component, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-groupedbarchart',
  templateUrl: './groupedbarchart.component.html',
  styleUrls: ['./groupedbarchart.component.css']
})
export class GroupedbarchartComponent implements AfterViewInit {
  chart = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.chart = new Chart(document.getElementById('canvas'), {
      type: 'bar',
      data: {
        labels: [
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        datasets : [
          {
            label: "VXUS",
            backgroundColor: "#50e3c2",
            borderColor: "#50e3c2",
            data: [16.92, 11.32, 11.32, 5.02, 9.11, 0, 4.98]
          },
          {
            label: "Benchmark",
            backgroundColor: "rgba(0,0,0,1)",
            borderColor: "rgba(0,0,0,1)",
            data: [17.21, 11.24, 11.24, 4.98, 9.07, 5.18, 5.02]
          }
        ]
      },
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
    })
    this.cdr.detectChanges();
  }

}
