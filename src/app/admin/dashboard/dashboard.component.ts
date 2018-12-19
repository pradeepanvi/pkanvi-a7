import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bannerForm: FormGroup;
  banner:any;

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get('../../../assets/code.json').subscribe(
      (res) => {
        this.banner = res;
      }
    );
    this.initForm();
  }

  onSubmit(){
    const headers = new HttpHeaders('*');
    this.http.post('../../../assets/code.json', this.bannerForm.value, {headers: headers}).subscribe(
      (res) => {
        console.log(res);
      }
    )
    console.log(this.bannerForm.value);
  }

  private initForm(){
    this.bannerForm = new FormGroup({
      'banner' : new FormControl('', Validators.required)
    })
  }

}
