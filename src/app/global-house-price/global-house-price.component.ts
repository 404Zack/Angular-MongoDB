import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import offline from 'highcharts/modules/offline-exporting';
exporting(Highcharts);
offline(Highcharts);

import {
  Router,
  RouterLink
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { houseModel } from '../model/model.houseModel';
import { getDataService } from '../getData.service';

@Component({
  selector: 'app-global-house-price',
  templateUrl: './global-house-price.component.html',
  styleUrls: ['./global-house-price.component.css']
})
export class GlobalHousePriceComponent implements OnInit {
  date: String[];
  i: number;
  j: number;
  EquallyWeighted: String[];
  loading = true;

 
  Highcharts = Highcharts;
  chartOptions={
    series: [{
      data: this.EquallyWeighted,
      type: 'line',
      name: 'GlobalHousePriceIndex'
    }],

    title: {
      text: 'Global House Price Index over years'
    },
    xAxis: {
      categories: this.date
    }
  };
  
  
  constructor(private router: Router, private title: Title, private newService: getDataService) {}

  ngOnInit() {

    this.newService.GetGlobalHousePrice().subscribe(data => {
      this.EquallyWeighted = new Array();
      this.date = new Array();
      this.i = 0;
      //console.log(data[0]["country"]);
      data.forEach(element => {

        this.EquallyWeighted[this.i] = element["equally_weighted"];
        this.date[this.i] = element["dateq"];
        this.i = this.i + 1;

      });
      //console.log(this.EquallyWeighted);
      //console.log(this.date);
      this.Highcharts = Highcharts;
      this.chartOptions = {
        series: [{
          data: this.EquallyWeighted,
          type: 'line',
          name: 'GlobalHousePriceIndex'
        }],
        title: {
          text: 'Global House Price Index over years'
        },
        xAxis: {
          categories: this.date
        },
      };
      //this.updateData(this.countries, this.RealCreditGrowth);

    });


   


  }

}
