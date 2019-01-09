import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/shared/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Back } from '../../../../../shared/back-end.interface';

@Component({
  selector: 'app-back-end-dashboard-edit',
  templateUrl: './back-end-dashboard-edit.component.html',
  styleUrls: ['./back-end-dashboard-edit.component.scss']
})
export class BackEndDashboardEditComponent implements OnInit {
  admin:any;
  font_awesome:any;
  backEndForm: FormGroup;
  editMode = false;
  id:number;
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
        { "propName": "icon", "value": this.backEndForm.value.icon},
        { "propName": "text", "value": this.backEndForm.value.text},
      ];
      this.http.patch('http://localhost:3000/back-end/'+this.id, updateOps).subscribe(
        (res) => {
          console.log(res);
        }
      )
      this.router.navigate(['../../'], {relativeTo: this.route})
    } else {
      this.http.post('http://localhost:3000/back-end', this.backEndForm.value).subscribe(
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
      this.http.get('http://localhost:3000/back-end/'+this.id).subscribe(
        (res : Back) => {
          let icon = res.back.icon;
          let text = res.back.text;
          this.backEndForm = new FormGroup({
            'icon' : new FormControl(icon),
            'text' : new FormControl(text)
          })
        }
      )
    }
  }
  
  private initF(){
    this.backEndForm = new FormGroup({
      'icon' : new FormControl(this.iconValue.nativeElement.value),
      'text' : new FormControl(this.textValue.nativeElement.value)
    })
  }
}
