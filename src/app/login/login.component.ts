
import * as Highcharts from 'highcharts';


import {
  Component,
  OnInit
} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {
  Router,
  RouterLink
} from '@angular/router';
import {
  Title
} from '@angular/platform-browser';
import { getDataService } from '../getData.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  RealCreditGrowth: String[];
  PriceToIncome: String [];
  AnnualPercent: String[];

  i: number;
  countries: String[];
  loading = true;
  Highcharts= Highcharts;
  chartOptions={
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
  Highcharts1= Highcharts;
  chartOptions1={
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
  Highcharts2= Highcharts;
  chartOptions2={
    series: [{
      data: this.AnnualPercent,
      type: 'column',
      name: 'House-Price'
    }],
    title: {
      text: 'House Price to income Around the world'
    },
    plotOptions : {
      series: {
        colorByPoint: true,
        animation: false,
        states: {
          "inactive": {}
        }
    }},
    xAxis: {
      categories: this.countries
    }
  };

  constructor(private router: Router, private title: Title,private _formBuilder: FormBuilder, private newService: getDataService) {


  }


  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
   });
   this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
   });

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
          text: 'Column chart with negative values'
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
          name: 'House-Price'
        }],
        title: {
          text: 'Real house price over the past year'
        },
        plotOptions : {
          series: {
            colorByPoint: true,
            animation: false,
            states: {
              "inactive": {}
            }
        }},
        xAxis: {
          categories: this.countries
        },
      };

    });

  }




 
}
