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
    <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div class="bg-cover h-48"></div>
        <div class="p-4 flex-1 flex flex-col" style="">
        <b>Stato:</b> {{item.statuses[0]['status']}}
        <b>Ora:</b> {{item.statuses[0]['timestamp'] * 1000 | date :'dd/MM/yyyy HH:mm':'+0000'}}
            <h3 class="mb-4 text-2xl"></h3>
            <div class="mb-4 text-grey-darker text-sm flex-1"></div>
            </div>
            </div>
            </div>
    </mat-card-content>
    </ul>
    </mat-card>
    `
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
