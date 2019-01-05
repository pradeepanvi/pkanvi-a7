import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  admin:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('../../../assets/code.json').subscribe(
      (res) => {
        this.admin = res;
      }
    );
  }

  edit(id){
    this.router.navigate(['edit-portfolio/'+id], {relativeTo: this.route})
  }

}
