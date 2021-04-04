import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { ByContinentComponent } from './countries/pages/by-continent/by-continent.component';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { ShowCountryComponent } from './countries/pages/show-country/show-country.component';

const routes:Routes = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full',
    },
    {
        path: 'region',
        component: ByContinentComponent,
    },
    {
        path: 'capital',
        component: ByCapitalComponent,
    },
    {
        path: 'pais/:countryCode',
        component: ShowCountryComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {

}