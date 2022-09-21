import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries-interface';
import { RestcountriesService } from '../../services/restcountries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit{

  constructor(private countryService: RestcountriesService){}

  term: string = "";
  showError: boolean = false;
  countries: Country[] = [];

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
    
    this.countryService.searchByCapital(this.term).subscribe(
      (countries)=>{
        this.countries = countries;
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
