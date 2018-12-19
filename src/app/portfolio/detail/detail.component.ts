import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, DoCheck {
  project:any;
  id: number;
  prevS = true;
  nextS = true;
  prevSNumber:number;
  nextSNumber:number;  

  constructor(private http:HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )
    this.http.get('../../assets/code.json').subscribe(
      (res) => {
        this.project = res;
      }
    )
    this.checkNumber();
  }

  ngDoCheck(){
    this.checkNumber();    
  }

  ngOnDestroy(){
  }

  checkNumber(){
    if(this.id == 0){
      this.prevS = false;
      this.nextS = true;
    } else {
      this.prevS = true;
      this.nextS = false;
    }
  }

}
