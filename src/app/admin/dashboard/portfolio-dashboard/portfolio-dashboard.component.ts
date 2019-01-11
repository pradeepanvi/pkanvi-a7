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
        console.log(this.admin)
      }
    );
  }

  add(){
    this.router.navigate(['add-portfolio'], {relativeTo: this.route})
  }

  edit(id){
    this.router.navigate(['edit-portfolio/'+id], {relativeTo: this.route})
  }

  delete(id){
    this.http.delete('http://localhost:3000/front-end/'+id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

}
