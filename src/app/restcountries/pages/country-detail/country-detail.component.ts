import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { RestcountriesService } from '../../services/restcountries.service';
import { Country } from '../../interfaces/countries-interface';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute,private restCountriesService: RestcountriesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) =>  this.restCountriesService.getCountryByAlpha(id) )
    ).subscribe((country:any)=>{
      this.country = country[0];
    });
  }

}
