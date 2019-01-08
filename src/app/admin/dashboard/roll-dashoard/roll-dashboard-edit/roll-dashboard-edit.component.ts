import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataService } from "../../../../../shared/data.service";
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Roll } from "../../../../../shared/roll.interface";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-roll-dashboard-edit',
  templateUrl: './roll-dashboard-edit.component.html',
  styleUrls: ['./roll-dashboard-edit.component.scss']
})
export class RollDashboardEditComponent implements OnInit {
  font_awesome:any;
  id:any;
  editMode = false;
  rollForm: FormGroup;
  @ViewChild('iconValue') iconValue: ElementRef;
  @ViewChild('headValue') headValue: ElementRef;
  @ViewChild('textValue') textValue: ElementRef;
  rollChanged = new Subject();

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
        { "propName": "icon", "value": this.rollForm.value.icon},
        { "propName": "head", "value": this.rollForm.value.head},
        { "propName": "text", "value": this.rollForm.value.text},
      ];
      this.http.patch('http://localhost:3000/roll/'+this.id, updateOps).subscribe(
        (res) => {
          console.log(res);
          this.rollChanged.next(res);
        }
      )
      this.router.navigate(['../../'], {relativeTo: this.route})
    } else {
      this.http.post('http://localhost:3000/roll', this.rollForm.value).subscribe(
        (res) => {
          console.log(res);
          this.rollChanged.next(res);
        }
      )
      this.router.navigate(['../'], {relativeTo: this.route})
    }
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

  private initForm(){
    if(this.editMode){
      this.http.get('http://localhost:3000/roll/'+this.id).subscribe(
        (res : Roll) => {
          let icon = res.roll.icon;
          let head = res.roll.head;
          let text = res.roll.text;
          this.rollForm = new FormGroup({
            'icon' : new FormControl(icon),
            'head' : new FormControl(head),
            'text' : new FormControl(text)
          })
        }
      )
    }
  }
  
  private initF(){
    this.rollForm = new FormGroup({
      'icon' : new FormControl(this.iconValue.nativeElement.value),
      'head' : new FormControl(this.headValue.nativeElement.value),
      'text' : new FormControl(this.textValue.nativeElement.value)
    })
  }

}
