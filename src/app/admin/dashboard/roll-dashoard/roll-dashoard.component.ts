import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Rolls } from '../../../../shared/roll.interface';

@Component({
  selector: 'app-roll-dashoard',
  templateUrl: './roll-dashoard.component.html',
  styleUrls: ['./roll-dashoard.component.scss']
})
export class RollDashoardComponent implements OnInit {
  rolls:any;

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/roll').subscribe(
      (res: Rolls) => {
        this.rolls = res.rolls;
        console.log(this.rolls);
      }
    )
  }

  add(){
    this.router.navigate(['add-roll'], {relativeTo: this.route})
  }

  edit(id){
    this.router.navigate(['edit-roll/'+id], {relativeTo: this.route});
  }

  delete(id){
    this.http.delete('http://localhost:3000/roll/'+id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

}
