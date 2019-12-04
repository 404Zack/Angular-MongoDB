import { Component, OnInit, Input } from '@angular/core';
import { houseModel } from '../model/model.houseModel';
import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import offline from 'highcharts/modules/offline-exporting';
import { getDataService } from '../getData.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
exporting(Highcharts);
offline(Highcharts);

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  HouseModel: houseModel= new houseModel();
  HousePriceGroupe:Array<houseModel>;

  Highcharts = Highcharts;
  
  chartOptions:any;

  i: number;
  j: number;

  constructor(private router: Router, private title: Title, private newService: getDataService) { }

  ngOnInit() {
    this.newService.getHousePricesCountYear().subscribe(data => {
      this.HousePriceGroupe=new Array();
      this.i = 0;
      //console.log(data[0]["country"]);
      data.forEach(element => {
        this.HouseModel.name=element["location"];
        this.HouseModel.series=new Array();
        for (let i = 0; i < 19; i++){
          this.HouseModel.series[i]=element[2000+i];
        }
        
        this.HousePriceGroupe[this.i]=this.HouseModel;
        this.i = this.i + 1;
        this.HouseModel=null;
        this.HouseModel=new houseModel();

      });
      //console.log(this.HousePriceGroupe);
      //console.log(this.countries);
      //console.log(this.Dates);
      //console.log(this.Values);
      this.Highcharts = Highcharts;
      this.chartOptions = {
        
        series: [],
       
        title: {
          text: 'House Price Growth for each country per year'
        },
        xAxis: {
          categories: ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"]
        },
      };
    
      
     
      for (let i = 0; i < this.HousePriceGroupe.length; i++){
        this.chartOptions.series[i]={
          data: this.HousePriceGroupe[i].series,
          type: 'line',
          name: this.HousePriceGroupe[i].name
        }
      }

      //this.updateData(this.countries, this.RealCreditGrowth);

    });

  }

}
