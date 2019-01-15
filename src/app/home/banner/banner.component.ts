import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banner } from '../../../shared/banner.interface';

@Component({
  selector: '[app-banner]',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banner:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://pkanvi-92987.firebaseio.com/banner.json').subscribe(
      (res: Banner) => {
        this.banner = res.banner;
        console.log(this.banner);
      }
    )
  }

}
