import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
      button {
        margin-right: 8px;
      }
    `
  ]
})
export class ByRegionComponent {
  regions:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion:string = '';
  countries: Country[] = [];

  constructor(private countriesService:CountriesService) { }

  activateRegion( region:string ):void {
    if (region === this.activeRegion) { return; }

    this.activeRegion = region;
    this.countries = [];

    this.countriesService.searchByRegion(region)
      .subscribe(countries => this.countries = countries);
  }
}
