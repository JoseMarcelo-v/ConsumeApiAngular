import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from './poke/pages/search/search.component';
import { MainComponentPokeComponent } from './poke/pages/main-component-poke/main-component-poke.component';
import { SelectApiComponent } from './select-api/select-api.component';
import { MainComponentComponent } from './restcountries/pages/main-component/main-component.component';
import { ByCountryComponent } from './restcountries/pages/by-country/by-country.component';
import { ByRegionComponent } from './restcountries/pages/by-region/by-region.component';
import { ByCapitalComponent } from './restcountries/pages/by-capital/by-capital.component';
import { CountryDetailComponent } from './restcountries/pages/country-detail/country-detail.component';


const routes: Routes = [
    {
      path:'',
      component: SelectApiComponent,
      pathMatch: 'full'
    },
    {
      path:'restcountries',
      component: MainComponentComponent,
      children: [
        {
          path:'', component: ByCountryComponent
        },
        {
          path:'search', component: ByCountryComponent
        },
        {
         path:'region', component: ByRegionComponent
        },
        {
         path:'capital', component: ByCapitalComponent
        },
        {
         path:'country-detail/:id', component: CountryDetailComponent
        },
        {
         path:'**',
         redirectTo:'search'
        }
      ]
    },
    {
      path:'pokeapi',
      component: MainComponentPokeComponent,
      children: [
        {
          path:'', component: SearchComponent
        },
        {
          path:'search', component: SearchComponent
        },
        {
         path:'**',
         redirectTo:''
        }
      ]
    },
    {
      path:'**',
      component:SelectApiComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ],
  })
  export class AppRoutingModule{ }
  