import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  banner:any;
  about:any;
  what:any;
  admin:any;

  bannerForm: FormGroup;
  aboutForm: FormGroup;
  whatForm: FormGroup;

  constructor(private http:HttpClient, private dataService:DataService) {}

  ngOnInit() {
    this.http.get('https://pkanvi-92987.firebaseio.com/banner.json').subscribe(
      (res) => {
        this.banner = res;
      }
    )
    this.http.get('https://pkanvi-92987.firebaseio.com/about.json').subscribe(
      (res) => {
        this.about = res;
      }
    )
    this.http.get('https://pkanvi-92987.firebaseio.com/what.json').subscribe(
      (res) => {
        this.what = res;
      }
    )
    this.http.get('../../../assets/code.json').subscribe(
      (res) => {
        this.admin = res;
      }
    );
    this.bannerF();
    this.aboutF();
    this.whatF();
    console.log(this.banner);
  }

  bannerSubmit(){
    this.http.put('https://pkanvi-92987.firebaseio.com/banner.json', this.bannerForm.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
  aboutSubmit(){
    this.http.put('https://pkanvi-92987.firebaseio.com/about.json', this.aboutForm.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
  whatSubmit(){
    this.http.put('https://pkanvi-92987.firebaseio.com/what.json', this.whatForm.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  private bannerF(){
    this.bannerForm = new FormGroup({
      'banner' : new FormControl('', Validators.required)
    })
  }
  private aboutF(){
    this.aboutForm = new FormGroup({
      'about' : new FormControl('', Validators.required)
    })
  }
  private whatF(){
    this.whatForm = new FormGroup({
      'what' : new FormControl('', Validators.required)
    })
  }
}
