import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Fronts } from '../../../../shared/front-end.interface';

@Component({
  selector: 'app-front-end-dashboard',
  templateUrl: './front-end-dashboard.component.html',
  styleUrls: ['./front-end-dashboard.component.scss']
})
export class FrontEndDashboardComponent implements OnInit {
  front_end:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/front-end').subscribe(
      (res: Fronts) => {
        this.front_end = res.fronts;
        console.log(this.front_end);
      }
    )
  }

  add(){
    this.router.navigate(['add-front-end'], {relativeTo: this.route})
  }

  edit(id){
    this.router.navigate(['edit-front-end/'+id], {relativeTo: this.route})
  }

  delete(id){
    this.http.delete('http://localhost:3000/front-end/'+id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
}
