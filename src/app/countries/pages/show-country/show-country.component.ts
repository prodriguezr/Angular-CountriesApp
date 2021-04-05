import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {
  country!: Country;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService:CountriesService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({countryCode}) => this.countriesService.getByCountryCode(countryCode)),
        tap(console.log)
      )
      .subscribe(country => this.country = country);
  }

}
