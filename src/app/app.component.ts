import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { ICountryCovidInfo } from "../classes/CountryCovidInfo";


const COVID_DATA_SAMPLES: ICountryCovidInfo[] = [
  {
    country: "Afghanistan",
    cases: 746,
    deaths: 6,
    allCases: 53453535,
    allDeaths: 2434,
    casesPer1000: 2132,
    deathsPer1000: 23,
  },
  {
    country: "Afghanistan",
    cases: 746,
    deaths: 6,
    allCases: 53453535,
    allDeaths: 2434,
    casesPer1000: 2132,
    deathsPer1000: 23,
  },
  {
    country: "Switzerland",
    cases: 746,
    deaths: 6,
    allCases: 53453535,
    allDeaths: 2434,
    casesPer1000: 2132,
    deathsPer1000: 23,
  },
];


const COVID_DATA_SAMPLES_ = [
  {

  }
];

export interface ICovidInfo {
  dateRep: string;
  day: string;
  month: string;
  year: string;
  cases: number;
  deaths: number;
  countriesAndTerritories: string;
  geoId: string;
  countryterritoryCode: string;
  popData2019: number;
  continentExp: string;
  "Cumulative_number_for_14_days_of_COVID-19_cases_per_100000": string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  covidInfos: ICovidInfo[] = [];

  title = 'covid-stats-angular';

  data = COVID_DATA_SAMPLES_ as any;




  private usersUrl: string = 'http://localhost:3001';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(this.usersUrl).subscribe((data: any) => { console.log(data); this.covidInfos = data.records; });
  }
}
