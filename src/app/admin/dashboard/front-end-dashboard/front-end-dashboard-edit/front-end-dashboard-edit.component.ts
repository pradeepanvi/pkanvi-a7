import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/shared/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Front } from '../../../../../shared/front-end.interface';

@Component({
  selector: 'app-front-end-dashboard-edit',
  templateUrl: './front-end-dashboard-edit.component.html',
  styleUrls: ['./front-end-dashboard-edit.component.scss']
})
export class FrontEndDashboardEditComponent implements OnInit {
  font_awesome:any;
  id:any;
  editMode = false;
  frontEndForm: FormGroup;
  @ViewChild('iconValue') iconValue: ElementRef;
  @ViewChild('textValue') textValue: ElementRef;

  constructor(private dataService:DataService, 
              private http:HttpClient,
              private router:Router, 
              private route:ActivatedRoute) { }


  ngOnInit() {
    this.font_awesome = this.dataService.font_awesome;
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initF();
        this.initForm();
      }
    )
  }

  iconClick(index){
    this.iconValue.nativeElement.value = this.font_awesome[index];
    this.initF();
  }

  onSubmit(){
    if(this.editMode){
      const updateOps = [
        { "propName": "icon", "value": this.frontEndForm.value.icon},
        { "propName": "text", "value": this.frontEndForm.value.text},
      ];
      this.http.patch('http://localhost:3000/front-end/'+this.id, updateOps).subscribe(
        (res) => {
          console.log(res);
        }
      )
      this.router.navigate(['../../'], {relativeTo: this.route})
    } else {
      this.http.post('http://localhost:3000/front-end', this.frontEndForm.value).subscribe(
        (res) => {
          console.log(res);
        }
      )
      this.router.navigate(['../'], {relativeTo: this.route})
    }
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  private initForm(){
    if(this.editMode){
      this.http.get('http://localhost:3000/front-end/'+this.id).subscribe(
        (res : Front) => {
          let icon = res.front.icon;
          let text = res.front.text;
          this.frontEndForm = new FormGroup({
            'icon' : new FormControl(icon),
            'text' : new FormControl(text)
          })
        }
      )
    }
  }
  
  private initF(){
    this.frontEndForm = new FormGroup({
      'icon' : new FormControl(this.iconValue.nativeElement.value),
      'text' : new FormControl(this.textValue.nativeElement.value)
    })
  }
}
