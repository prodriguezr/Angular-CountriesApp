import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByContinentComponent } from './pages/by-continent/by-continent.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    ByCapitalComponent, 
    ByCountryComponent, 
    ByContinentComponent, 
    ShowCountryComponent, 
    CountryTableComponent, CountryInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    ByCapitalComponent, 
    ByCountryComponent, 
    ByContinentComponent, 
    ShowCountryComponent
  ],
})
export class CountriesModule { }
