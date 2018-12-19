import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projects:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('../assets/code.json').subscribe(
      (res) => {
        this.projects = res;
      }
    )
  }

}
