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
  admin:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('../../../assets/code.json').subscribe(
      (res) => {
        this.admin = res;
      }
    );
  }

  add(){
    this.router.navigate(['add-Bskill'], {relativeTo: this.route})
  }
  editBSkill(id){
    this.router.navigate(['edit-Bskill/'+id], {relativeTo: this.route})
  }

}
