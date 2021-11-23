import {Component, Input} from '@angular/core';


const columnNames = [
  "country",
  "cases",
  "deaths",
  "allCases",
  "allDeaths",
  "casesPer1000",
  "deathsPer1000",
]

@Component({
  selector: 'app-table-basic-example',
  templateUrl: './table-basic-example.component.html',
  styleUrls: ['./table-basic-example.component.scss']
})
export class TableBasicExampleComponent {
  displayedColumns: string[] = columnNames;
  @Input() dataSource = [];
}