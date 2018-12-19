import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface Service {
  value: string;
}

@Component({
  selector: 'app-start-project',
  templateUrl: './start-project.component.html',
  styleUrls: ['./start-project.component.scss']
})
export class StartProjectComponent implements OnInit {
  projectForm: FormGroup;
  services: Service[] = [
    {value: 'PSD To HTML'},
    {value: 'PSD To Angular'},
    {value: 'PSD To Wordpress'}
  ];

  pages = ['1','2-10','11-25','25+'];
  budgets = ['< $100','$100 - $500', '$500-$2500', '$2500 >']

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

  private initForm(){
    this.projectForm = new FormGroup({
      'service' : new FormControl('', Validators.required),
      'page' : new FormControl('1'),
      'budget': new FormControl('< $100'),
      'msg' : new FormControl(''),
      'link' : new FormControl(''),
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, Validators.email])      
    })
  }

}
