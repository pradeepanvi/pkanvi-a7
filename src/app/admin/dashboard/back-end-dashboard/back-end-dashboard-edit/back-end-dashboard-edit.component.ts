import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/shared/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

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

  constructor(private dataService:DataService, private router:Router, private route:ActivatedRoute) { }


  ngOnInit() {
    this.font_awesome = this.dataService.font_awesome;
    this.route.params.subscribe(
      (params: Params) => {
        if(params['id'] != null){
          this.id = params['id'];
          this.editMode = true;
        } else {
          this.editMode = false;
        }
      }
    )
    this.initForm();
  }

  iconClick(index){
    this.iconValue.nativeElement.value = this.font_awesome[index];
    this.initForm();
  }

  onSubmit(){
    console.log(this.backEndForm.value);
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

  private initForm(){
    console.log(this.id);
    let icon = this.iconValue.nativeElement.value;
    let text = this.textValue.nativeElement.value;
    if(this.editMode){
      // icon = this.dataService.admin.back_end_skills[this.id].icon;
      // text = this.dataService.admin.back_end_skills[this.id].text;
    }
    this.backEndForm = new FormGroup({
      'icon' : new FormControl(icon),
      'name' : new FormControl(text)
    })
  } 


}
