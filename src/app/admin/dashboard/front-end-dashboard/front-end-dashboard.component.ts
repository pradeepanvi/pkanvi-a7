import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-front-end-dashboard',
  templateUrl: './front-end-dashboard.component.html',
  styleUrls: ['./front-end-dashboard.component.scss']
})
export class FrontEndDashboardComponent implements OnInit {
  admin:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('../../../assets/code.json').subscribe(
      (res) => {
        this.admin = res;
      }
    );
  }

  editFSkill(id){
    this.router.navigate(['edit-Fskill/'+id], {relativeTo: this.route})
  }
}
