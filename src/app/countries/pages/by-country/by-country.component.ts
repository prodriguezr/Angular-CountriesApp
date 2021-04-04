import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  query:string = '';
  hasError:boolean = false;
  countries:Country[] = [];

  constructor(private countriesService:CountriesService) { }

  search(queryString:string = ''):void {
    this.hasError = false;

    this.query = queryString.trim();

    if (this.query.length > 0) {
      this.countriesService.searchByCountry(this.query)
      .subscribe((countries) => {
        this.countries = countries;
      }, (err) => {
        this.countries = [];
        this.hasError = true;
      });
    } else {
      this.countries = [];
      this.hasError = true;
    }
  }

  suggestions(event:any):void {
    console.log(event);
  }
}