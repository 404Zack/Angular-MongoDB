import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';
import {MatStepperModule} from '@angular/material/stepper';


import { HttpModule } from '@angular/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { platformBrowserDynamic }  from '@angular/platform-browser-dynamic';
import { MatInputModule, MatButtonModule} from '@angular/material'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MyChartComponent } from './my-chart/my-chart.component';
import { GlobalHousePriceComponent } from './global-house-price/global-house-price.component';
import { HousePricesComponent } from './house-prices/house-prices.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ChartTestComponent } from './chart-test/chart-test.component';  

import { getDataService } from './getData.service';
import { LineChartComponent } from './line-chart/line-chart.component';

declare var require:any;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyChartComponent,
    GlobalHousePriceComponent,
    HousePricesComponent,
    HomeComponent,
    NavBarComponent,
    ChartTestComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,  
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatStepperModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
    
  ],
  providers: [getDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

