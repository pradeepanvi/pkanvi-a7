import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Projects } from '../../../../shared/project.interface';

@Component({
  selector: 'app-portfolio-dashboard',
  templateUrl: './portfolio-dashboard.component.html',
  styleUrls: ['./portfolio-dashboard.component.scss']
})
export class PortfolioDashboardComponent implements OnInit {
  projects:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/project').subscribe(
      (res: Projects) => {
        this.projects = res.projects;
        console.log(this.projects)
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
    this.http.delete('http://localhost:3000/project/'+id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

}
