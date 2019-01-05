import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extra-dashboard',
  templateUrl: './extra-dashboard.component.html',
  styleUrls: ['./extra-dashboard.component.scss']
})
export class ExtraDashboardComponent implements OnInit {
  admin:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('../../../assets/code.json').subscribe(
      (res) => {
        this.admin = res;
      }
    );
  }

  editExtra(id){
    this.router.navigate(['edit-extra/'+id], {relativeTo: this.route})
  }

}
