
import * as Highcharts from 'highcharts';


import {
  Component,
  OnInit
} from '@angular/core';

import { FormBuilder } from '@angular/forms';


import {
  Router
} from '@angular/router';
import {
  Title
} from '@angular/platform-browser';
import { getDataService } from '../getData.service';

import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {



  RealCreditGrowth: String[];
  PriceToIncome: String[];
  AnnualPercent: String[];
  countries: String[];

  i: number;
  loading = true;

  //Graphe 1
  Highcharts = Highcharts;
  chartOptions = {
    series: [{
      data: this.RealCreditGrowth,
      type: 'column',
      name: 'RealCreditGrowth'
    }],
    title: {
      text: 'Column chart with negative values'
    },
    xAxis: {
      categories: this.countries
    }
  };

  //Graphe 2
  Highcharts1 = Highcharts;
  chartOptions1 = {
    series: [{
      data: this.PriceToIncome,
      type: 'column',
      name: 'House-Price'
    }],
    title: {
      text: 'House Price to income Around the world'
    },
    xAxis: {
      categories: this.countries
    }
  };

  //Graphe 3
  Highcharts2 = Highcharts;
  chartOptions2 = {
    series: [{
      data: this.AnnualPercent,
      type: 'column',
      name: 'House-Price'
    }],
    title: {
      text: 'House Price to income Around the world'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
        animation: false,
        states: {
          "inactive": {}
        }
      }
    },
    xAxis: {
      categories: this.countries
    }
  };

  constructor(private router: Router, private title: Title, private _formBuilder: FormBuilder, private newService: getDataService) {


  }


  ngOnInit() {



    this.newService.GetCreditGrowth().subscribe(data => {
      this.countries = new Array();
      this.RealCreditGrowth = new Array();
      this.i = 0;
      data.forEach(element => {

        this.countries[this.i] = element["country"];
        this.RealCreditGrowth[this.i] = element["RealCreditGrowth"];
        this.i = this.i + 1;

      });
      console.log(this.countries);
      console.log(this.RealCreditGrowth);
      this.Highcharts = Highcharts;
      this.chartOptions = {
        series: [{
          data: this.RealCreditGrowth,
          type: 'column',
          name: 'RealCreditGrowth'
        }],
        title: {
          text: 'Real Credit Growth over the past year (2018)'
        },
        xAxis: {
          categories: this.countries
        },
      };

    });
    this.newService.GetPriceToincome().subscribe(data => {
      this.countries = new Array();
      this.PriceToIncome = new Array();
      this.i = 0;
      //console.log(data[0]["country"]);
      data.forEach(element => {

        this.countries[this.i] = element["country_code"];
        this.PriceToIncome[this.i] = element["price-to-income-ratio"];
        this.i = this.i + 1;

      });
      console.log(this.countries);
      console.log(this.PriceToIncome);
      this.Highcharts1 = Highcharts;
      this.chartOptions1 = {
        series: [{
          data: this.PriceToIncome,
          type: 'column',
          name: 'House-Price'
        }],
        title: {
          text: 'House Price to income Around the world'
        },
        xAxis: {
          categories: this.countries
        },
      };

    });

    this.newService.getHousePricesAroundtheWorld().subscribe(data => {
      this.countries = new Array();
      this.AnnualPercent = new Array();
      this.i = 0;
      //console.log(data[0]["country"]);
      data.forEach(element => {

        this.countries[this.i] = element["country"];
        this.AnnualPercent[this.i] = element["annual_percent_change"];
        this.i = this.i + 1;

      });
      console.log(this.countries);
      console.log(this.AnnualPercent);
      this.Highcharts2 = Highcharts;
      this.chartOptions2 = {
        series: [{
          data: this.AnnualPercent,
          type: 'column',
          name: 'Real House-Price'
        }],
        title: {
          text: 'Real house price over the past year'
        },
        plotOptions: {
          series: {
            colorByPoint: true,
            animation: false,
            states: {
              "inactive": {}
            }
          }
        },
        xAxis: {
          categories: this.countries
        },
      };

    });

  }





}
