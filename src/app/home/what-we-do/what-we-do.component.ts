import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fronts } from '../../../shared/front-end.interface';
import { Backs } from '../../../shared/back-end.interface';
import { What } from '../../../shared/what.interface';

@Component({
  selector: '[app-what-we-do]',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {
  what:any;
  front_end:any;
  back_end:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://pkanvi-92987.firebaseio.com/what.json').subscribe(
      (res: What) => {
        this.what = res.what;
      }
    )
    this.http.get('http://localhost:3000/front-end').subscribe(
      (res: Fronts) => {
        this.front_end = res.fronts;
        console.log(this.front_end);
      }
    )
    this.http.get('http://localhost:3000/back-end').subscribe(
      (res: Backs) => {
        this.back_end = res.backs;
        console.log(this.back_end);
      }
    )
  }

}
