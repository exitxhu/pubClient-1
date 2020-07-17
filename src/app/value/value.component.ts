import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
/** value component*/
export class ValueComponent implements OnInit {
  values: any;
  /** value ctor */
  constructor(private http: HttpClient) {
    this.getValues();
  }
  ngOnInit(): void {
  }
  getValues() {
    this.http.get('https://localhost:5001/weatherforecast').subscribe(
      response => {
        this.values = response;
        console.table(response);
        console.log({ response: response });
      }, error => {
        console.log(error);
        console.dir(error);
      }
    );
  }
}
