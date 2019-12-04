import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { getDataService } from '../getData.service';

import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);

@Component({
  selector: 'app-house-prices',
  templateUrl: './house-prices.component.html',
  styleUrls: ['./house-prices.component.css']
})
export class HousePricesComponent implements OnInit {
  Index: String[];
  i: number;
  PlaceNames: String[];
  loading = true;
  Highcharts = Highcharts;
  chartOptions: any;

  constructor(private router: Router, private title: Title, private newService: getDataService) { }

  ngOnInit() {

    this.newService.GetFHFA().subscribe(data => {
      this.PlaceNames = new Array();
      this.Index = new Array();
      this.i = 0;
      //console.log(data[0]["country"]);
      data.forEach(element => {

        this.PlaceNames[this.i] = element["place_name"];
        this.Index[this.i] = element["index_nsa"];
        this.i = this.i + 1;

      });
      console.log(this.PlaceNames);
      console.log(this.Index);
      this.Highcharts = Highcharts;
      this.chartOptions = {
        chart: {
          type: 'pie'
        },
        dataLabels: {
          enabled: false
        },
        exporting: {
          enabled: true
        },
        xAxis: {
          categories: this.PlaceNames
        },
        tooltip: {
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        title: {
          text: 'Houcing index of 9 Places in a pie chart'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series: [{
          data: this.Index
        }]
      };

    });

  }

}
