import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '[app-banner]',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banner:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/code.json').subscribe(
      (res) => {
        this.banner = res;
        console.log(this.banner);
      }
    )
  }

}
