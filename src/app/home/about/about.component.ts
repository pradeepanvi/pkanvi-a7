import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: '[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/code.json').subscribe(
      (res) => {
        this.about = res;
        console.log(this.about);
      }
    )
  }

}
