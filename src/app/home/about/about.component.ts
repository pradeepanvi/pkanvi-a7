import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from 'src/shared/data.service';
import { About } from '../../../shared/about.interface';
import { Rolls } from '../../../shared/roll.interface';
import { Extras } from '../../../shared/extra.interface';

@Component({
  selector: '[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about:any;
  rolls:any;
  extras:any;

  constructor(private http:HttpClient, private dataService:DataService) { }

  ngOnInit() {
    this.http.get('https://pkanvi-92987.firebaseio.com/about.json').subscribe(
      (res: About) => {
        this.about = res.about;
        console.log(this.about);
      }
    )
    this.http.get('http://localhost:3000/roll').subscribe(
      (res: Rolls) => {
        this.rolls = res.rolls;
        console.log(this.rolls);
      }
    )
    this.http.get('http://localhost:3000/extra').subscribe(
      (res: Extras) => {
        this.extras = res.extras;
        console.log(this.extras);
      }
    )    
  }

}
