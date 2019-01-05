import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roll-dashoard',
  templateUrl: './roll-dashoard.component.html',
  styleUrls: ['./roll-dashoard.component.scss']
})
export class RollDashoardComponent implements OnInit {
  admin:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('../../../assets/code.json').subscribe(
      (res) => {
        this.admin = res;
      }
    );
  }

  editRoll(id){
    this.router.navigate(['edit-roll/'+id], {relativeTo: this.route})
  }

}
