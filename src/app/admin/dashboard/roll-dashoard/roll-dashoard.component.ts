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
  rolls:any;
  _id:number;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/roll').subscribe(
      (res) => {
        this.rolls = res;
        console.log(this.rolls);
      }
    )
    this.http.get('../../../assets/code.json').subscribe(
      (res) => {
        this.admin = res;
      }
    );
  }

  add(){
    this.router.navigate(['add-roll'], {relativeTo: this.route})
  }

  editRoll(id, _id){
    this._id = _id;
    this.router.navigate(['edit-roll/'+_id], {relativeTo: this.route});
  }

  deleteRoll(id){
    this.http.delete('http://localhost:3000/roll/'+id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

}
