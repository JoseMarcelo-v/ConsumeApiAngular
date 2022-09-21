import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries-interface';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {

  private apiBaseUrl: string = "https://restcountries.com/v3.1";

  constructor(private http:HttpClient){ }
  
  getAllCountries(): Observable<Country[]>{
    const url = `${this.apiBaseUrl}/all`;
    return this.http.get<Country[]>(url);
  }

  searchCountry(term:string): Observable<Country[]>{
    const url = `${this.apiBaseUrl}/name/${term}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital(capital:string): Observable<Country[]>{
    const url = `${this.apiBaseUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha(code:string): Observable<Country>{
    const url = `${this.apiBaseUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  }


}
