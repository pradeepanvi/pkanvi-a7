import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataService } from "../../../../../shared/data.service";
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roll-dashboard-edit',
  templateUrl: './roll-dashboard-edit.component.html',
  styleUrls: ['./roll-dashboard-edit.component.scss']
})
export class RollDashboardEditComponent implements OnInit {
  font_awesome:any;
  rollForm: FormGroup;
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
    console.log(this.rollForm.value);
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

  private initForm(){
    this.rollForm = new FormGroup({
      'icon' : new FormControl(this.iconValue.nativeElement.value),
      'name' : new FormControl(this.textValue.nativeElement.value)
    })
  }  

}
