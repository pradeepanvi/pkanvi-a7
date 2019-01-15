import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../../../shared/project.interface';

@Component({
  selector: '[app-projects]',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/project').subscribe(
      (res: Projects) => {
        this.projects = res.projects;
        console.log(this.projects)
      }
    );
  }

}
