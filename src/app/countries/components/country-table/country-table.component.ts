import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `
      .small-flag {
        width: 50px;
        border: 1px solid #000;
      }
    `    
  ]
})
export class CountryTableComponent {
  @Input() countries:Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
