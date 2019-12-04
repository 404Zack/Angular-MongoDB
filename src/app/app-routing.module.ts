import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyChartComponent } from './my-chart/my-chart.component'
import { GlobalHousePriceComponent } from './global-house-price/global-house-price.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HousePricesComponent } from './house-prices/house-prices.component';
import { LineChartComponent } from './line-chart/line-chart.component';
const routes: Routes = [

  { path: 'line', component: LineChartComponent },
  { path: 'chart', component: MyChartComponent },
  { path: 'GlobalHousePrice', component: GlobalHousePriceComponent },
  { path: 'navbar',component: NavBarComponent },
  { path: 'home',component: HomeComponent },
  { path: '',component: HomeComponent },
  { path: 'HousePrice', component: HousePricesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
