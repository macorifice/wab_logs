import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-rispondi',
  templateUrl: './rispondi.component.html',
  styleUrls: ['./rispondi.component.scss']
})
export class RispondiComponent implements OnInit {

  constructor(  ) { }

  ngOnInit() {
    this.getAndSetParams();
    this.removeParams();
  }

  getAndSetParams(){
    $.urlParam = function(name){
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
    }
    $('#name').val(decodeURIComponent($.urlParam('number')));
    $('#risposta').val(decodeURIComponent($.urlParam('risposta')));
    $("#name").prop('disabled', true);
    $("#risposta").prop('disabled', true);
    
  }

  removeParams(){
    var clean_uri = location.protocol + "//" + location.host + location.pathname;
    window.history.replaceState({}, document.title, clean_uri);
    }

}
