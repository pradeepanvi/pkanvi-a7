import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataService } from "../../../../../shared/data.service";
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roll-dashboard-edit',
  templateUrl: './roll-dashboard-edit.component.html',
  styleUrls: ['./roll-dashboard-edit.component.scss']
})
export class RollDashboardEditComponent implements OnInit {
  font_awesome:any;
  id: number;
  editMode = false;
  rollForm: FormGroup;
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
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  iconClick(index){
    this.iconValue.nativeElement.value = this.font_awesome[index];
    this.initForm();
  }

  onSubmit(){
    this.http.post('https://pkanvi-92987.firebaseio.com/roll.json', this.rollForm.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
    if(this.editMode){

    } else {
      this.dataService.addRoll(this.rollForm.value);
    }
    console.log(this.rollForm.value);
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

  private initForm(){
    let icon = '';
    let text = '';
    if(this.editMode){
      this.http.get('https://pkanvi-92987.firebaseio.com/roll.json').subscribe(
        (res) => {
          console.log(res);
        }
      )
    }
    this.rollForm = new FormGroup({
      'icon' : new FormControl(this.iconValue.nativeElement.value),
      'name' : new FormControl(this.textValue.nativeElement.value)
    })
  }  

}
