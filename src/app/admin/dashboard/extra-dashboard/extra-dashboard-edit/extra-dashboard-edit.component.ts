import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/shared/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extra-dashboard-edit',
  templateUrl: './extra-dashboard-edit.component.html',
  styleUrls: ['./extra-dashboard-edit.component.scss']
})
export class ExtraDashboardEditComponent implements OnInit {
  extraForm: FormGroup;

  constructor(private dataService:DataService, private router:Router, private route:ActivatedRoute) { }


  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    console.log(this.extraForm.value);
  }

  onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route})
  }

  private initForm(){
    this.extraForm = new FormGroup({
      'number' : new FormControl(''),
      'name' : new FormControl('')
    })
  } 



}
