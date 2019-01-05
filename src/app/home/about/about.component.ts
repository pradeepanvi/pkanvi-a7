import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from 'src/shared/data.service';

@Component({
  selector: '[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about:any;
  admin:any;

  constructor(private http:HttpClient, private dataService:DataService) { }

  ngOnInit() {
    this.http.get('https://pkanvi-92987.firebaseio.com/about.json').subscribe(
      (res) => {
        this.about = res;
        console.log(this.about);
      }
    )
    this.http.get('../../assets/code.json').subscribe(
      (res) => {
        this.admin = res;
        console.log(this.admin);
      }
    )
  }

}
