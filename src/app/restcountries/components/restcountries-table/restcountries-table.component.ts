import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries-interface';

@Component({
  selector: 'app-restcountries-table',
  templateUrl: './restcountries-table.component.html',
  styleUrls: ['./restcountries-table.component.css']
})
export class RestcountriesTableComponent implements OnInit {

  @Input() countries: Country[] = [];

  constructor() { }

  ngOnInit(): void{
  }

}
