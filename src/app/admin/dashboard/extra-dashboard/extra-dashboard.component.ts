import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Extras } from '../../../../shared/extra.interface';

@Component({
  selector: 'app-extra-dashboard',
  templateUrl: './extra-dashboard.component.html',
  styleUrls: ['./extra-dashboard.component.scss']
})
export class ExtraDashboardComponent implements OnInit {
  extras:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/extra').subscribe(
      (res: Extras) => {
        this.extras = res.extras;
        console.log(this.extras);
      }
    )
  }

  add(){
    this.router.navigate(['add-extra'], {relativeTo: this.route})
  }

  edit(id){
    this.router.navigate(['edit-extra/'+id], {relativeTo: this.route})
  }

  delete(id){
    this.http.delete('http://localhost:3000/extra/'+id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

}
