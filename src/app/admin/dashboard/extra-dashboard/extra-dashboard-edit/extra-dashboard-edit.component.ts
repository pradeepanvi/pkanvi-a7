import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Extra } from "../../../../../shared/extra.interface";

@Component({
  selector: 'app-extra-dashboard-edit',
  templateUrl: './extra-dashboard-edit.component.html',
  styleUrls: ['./extra-dashboard-edit.component.scss']
})
export class ExtraDashboardEditComponent implements OnInit {
  id:any;
  editMode = false;
  extraForm: FormGroup;

  constructor(private http:HttpClient,
              private router:Router, 
              private route:ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit(){
    if(this.editMode){
      const updateOps = [
        { "propName": "number", "value": this.extraForm.value.number},
        { "propName": "text", "value": this.extraForm.value.text}
      ];
      this.http.patch('http://localhost:3000/extra/'+this.id, updateOps).subscribe(
        (res) => {
          console.log(res);
        }
      )
      this.router.navigate(['../../'], {relativeTo: this.route})
    } else {
      this.http.post('http://localhost:3000/extra', this.extraForm.value).subscribe(
        (res) => {
          console.log(res);
        }
      )
      this.router.navigate(['../'], {relativeTo: this.route})
    }
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

  private initForm(){
    let number = 0;
    let text = '';
    if(this.editMode){
      this.http.get('http://localhost:3000/extra/'+this.id).subscribe(
        (res : Extra) => {
          number = res.extra.number,
          text = res.extra.text,
          this.extraForm = new FormGroup({
            'number' : new FormControl(number),
            'text' : new FormControl(text)
          })
        }
      )
    }
    this.extraForm = new FormGroup({
      'number' : new FormControl(number),
      'text' : new FormControl(text)
    })
  }
  
}
