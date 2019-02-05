import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadfromglitchService {
  data: any []; 

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('https://2lb3om3x53.execute-api.eu-west-1.amazonaws.com/prod/webhook').subscribe(
      res => this.data
    )}
}
