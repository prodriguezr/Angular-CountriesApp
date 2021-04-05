import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private _apiUrl:string = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient:HttpClient) { }

  private get params():HttpParams {
    return new HttpParams().set('fields', 'translations;name;capital;alpha2Code;population;flag');
  }

  searchByCountry(queryString:string = ''):Observable<Country[]> {
    const url:string = `${this._apiUrl}/name/${queryString}`;

    return this.httpClient.get<Country[]>(url, { params: this.params }); 
  }

  searchByCapital(queryString:string = ''):Observable<Country[]> {
    const url:string = `${this._apiUrl}/capital/${queryString}`;

    return this.httpClient.get<Country[]>(url, { params: this.params });
  }

  getByCountryCode(countryCode:string = ''):Observable<Country> {
    const url:string = `${this._apiUrl}/alpha/${countryCode}`;

    return this.httpClient.get<Country>(url);
  } 

  searchByRegion(region:string = ''):Observable<Country[]> {
    const url:string = `${this._apiUrl}/region/${region}`;

    return this.httpClient.get<Country[]>(url, { params: this.params });
  }
}
