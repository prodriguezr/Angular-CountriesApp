import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li {
      cursor: pointer
    }
  `
  ]
})
export class ByCountryComponent {
  query             :string    = '';
  hasError          :boolean   = false;
  countries         :Country[] = [];
  suggestedCountries:Country[] = [];
  showSuggestions   :boolean   = false;

  constructor(private countriesService:CountriesService) { }

  search(query:string = ''):void {
    this.hasError = false;
    this.query = query.trim();
    this.showSuggestions = false;

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

  suggestions(query:string):void {
    this.hasError = false;
    this.query = query;
    this.showSuggestions = true;

    this.countriesService.searchByCountry(query.trim())
      .subscribe(
        countries => this.suggestedCountries = countries.splice(0, 5)
        , (err) => this.suggestedCountries = []
      );
  }
}