import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private _apiUrl:string = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient:HttpClient) { }

  searchByCountry(queryString:string = ''):Observable<Country[]> {
    const url:string = `${this._apiUrl}/name/${queryString}`;

    return this.httpClient.get<Country[]>(url); 
  }

  searchByCapital(queryString:string = ''):Observable<Country[]> {
    const url:string = `${this._apiUrl}/capital/${queryString}`;

    return this.httpClient.get<Country[]>(url);
  }

  getCountryByCode(countryCode:string = ''):Observable<Country> {
    const url:string = `${this._apiUrl}/alpha/${countryCode}`;

    return this.httpClient.get<Country>(url);
  } 
}
