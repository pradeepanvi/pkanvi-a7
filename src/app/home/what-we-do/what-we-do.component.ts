import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '[app-what-we-do]',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {
  what:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/code.json').subscribe(
      (res) => {
        this.what = res;
      }      
    )
  }

}
