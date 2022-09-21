import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from '../../services/restcountries.service';
import { Country } from '../../interfaces/countries-interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit{

  term: string = "";
  showError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: RestcountriesService){}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(){
    this.showError = false;
    this.countryService.getAllCountries().subscribe(
      (countries)=>{
        this.countries = countries.slice(0,10);
      },(err)=>{
        this.showError = true;
        this.countries = [];
      }
    );
  }

  search(term: string){
    this.showError = false;
    this.term = term;

    if(this.term == ""){
      this.getAllCountries();
      return;
    }
    
    this.countryService.searchCountry(this.term).subscribe(
      (countries)=>{
        this.countries = countries;
        // console.log( countries );
      },(err)=>{
        this.showError = true;
        this.countries = [];
      }
    );
  }

  suggests(term: string){
    // console.log(term);
  }

}
