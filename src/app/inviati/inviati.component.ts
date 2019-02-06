import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-inviati',
  // templateUrl: './inviati.component.html',
  template: `
<mat-card class="example-card">
    <ul #scrollBottom *ngFor="let item of dataArray">
    <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Message to : {{item.statuses[0]['recipient_id']}}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
    <b>Stato:</b> {{item.statuses[0]['status']}}
    <b>Ora:</b> {{item.statuses[0]['timestamp'] * 1000 | date :'dd/MM/yyyy HH:mm':'+0000'}}
    </mat-card-content>
    </ul>
 </mat-card>`
  ,  
  styleUrls: ['./inviati.component.scss']
})
export class InviatiComponent implements OnInit {
  scrHeight:any;
  scrWidth:any;

  dataArray : any []; 

  constructor(private httpService: HttpClient, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      window.location.reload();      
    }, 150000); // Activate after 2,5 minutes.

    

    this.httpService.get('https://2lb3om3x53.execute-api.eu-west-1.amazonaws.com/prod/webhook').subscribe(
      data => {
        this.dataArray = data as object [];
        this.dataArray = this.dataArray.filter(element => element.hasOwnProperty('statuses'));
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      })
      
      this.goToBottom();
      
      
  }

  goToBottom(){
    $(window).on('load', function() { $("html, body").animate({ scrollTop: 15000 }, 3000); });
}


}
