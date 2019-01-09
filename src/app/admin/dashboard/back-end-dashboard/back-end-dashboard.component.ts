import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/shared/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-back-end-dashboard',
  templateUrl: './back-end-dashboard.component.html',
  styleUrls: ['./back-end-dashboard.component.scss']
})
export class BackEndDashboardComponent implements OnInit {
  back_end:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/back-end').subscribe(
      (res) => {
        this.back_end = res;
        console.log(this.back_end);
      }
    )
  }

  add(){
    this.router.navigate(['add-back-end'], {relativeTo: this.route})
  }

  edit(id){
    this.router.navigate(['edit-back-end/'+id], {relativeTo: this.route})
  }

  delete(id){
    this.http.delete('http://localhost:3000/back-end/'+id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

}
