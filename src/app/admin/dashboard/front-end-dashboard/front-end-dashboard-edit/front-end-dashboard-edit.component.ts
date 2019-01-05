import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/shared/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-front-end-dashboard-edit',
  templateUrl: './front-end-dashboard-edit.component.html',
  styleUrls: ['./front-end-dashboard-edit.component.scss']
})
export class FrontEndDashboardEditComponent implements OnInit {
  font_awesome:any;
  frontEndForm: FormGroup;
  @ViewChild('iconValue') iconValue: ElementRef;
  @ViewChild('textValue') textValue: ElementRef;

  constructor(private dataService:DataService, private router:Router, private route:ActivatedRoute) { }


  ngOnInit() {
    this.font_awesome = this.dataService.font_awesome;
    this.initForm();
  }

  iconClick(index){
    this.iconValue.nativeElement.value = this.font_awesome[index];
    this.initForm();
  }

  onSubmit(){
    console.log(this.frontEndForm.value);
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

  private initForm(){
    this.frontEndForm = new FormGroup({
      'icon' : new FormControl(this.iconValue.nativeElement.value),
      'name' : new FormControl(this.textValue.nativeElement.value)
    })
  } 
}
