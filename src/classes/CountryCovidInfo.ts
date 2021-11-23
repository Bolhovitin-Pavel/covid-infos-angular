import { ICovidInfo } from "../app/app.component";


function GetFraction(value: number, allCount: number, targetCount: number): number {
    return value / allCount * targetCount;
}


function RoundNumber(number: number): number {
    return Math.round(number * 1000) / 1000;
}


export interface ICountryCovidInfo {
    country: string;
    cases: number;
    deaths: number;
    allCases: number;
    allDeaths: number;
    popData2019: number;
}

export default class CountryCovidInfo {

    public country: string;
    public cases: number;
    public deaths: number;
    public allCases: number;
    public allDeaths: number;
    public popData2019: number;


    constructor(info: ICountryCovidInfo) {
    // constructor(country: string, cases: number, deaths: number, allCases: number, allDeaths: number, popData2019: number) {
        this.country = info.country;
        this.cases = info.cases;
        this.deaths = info.deaths;
        this.allCases = info.allCases;
        this.allDeaths = info.allDeaths;
        this.popData2019 = info.popData2019;
    }


    get casesPer1000() {
        return RoundNumber(GetFraction(this.cases, this.popData2019, 1000));
    }

    get deathsPer1000() {
        return RoundNumber(GetFraction(this.deaths, this.popData2019, 1000));
    }
}


export function GroupCountryCovidInfos(infos: ICovidInfo[]) {
    let groups: ICountryCovidInfo[] = [];
  
    infos.forEach((info: ICovidInfo) => {
        let foundGroup: ICountryCovidInfo | undefined = groups.find((group: ICountryCovidInfo) => group.country === info.countriesAndTerritories);
  
        if (foundGroup !== undefined) {
            foundGroup.allCases += info.cases;
            foundGroup.allDeaths += info.deaths;
        }
        else {
            groups.push(new CountryCovidInfo({
                country: info.countriesAndTerritories,
                cases: info.cases,
                deaths: info.deaths,
                allCases: info.cases,
                allDeaths: info.deaths,
                popData2019: info.popData2019,
            }));
        }
    });
  
    return groups;
  }