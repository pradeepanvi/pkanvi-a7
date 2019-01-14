import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../../../../../shared/data.service';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/uploads/';

@Component({
  selector: 'app-portfolio-dashboard-edit',
  templateUrl: './portfolio-dashboard-edit.component.html',
  styleUrls: ['./portfolio-dashboard-edit.component.scss']
})
export class PortfolioDashboardEditComponent implements OnInit {
  technology:any;
  technologySelected:any;
  portfolioForm:FormGroup;
  categories:any;
  selectedThumb = null;
  selectedMain = null;
  selectedSlide1 = null;
  selectedSlide2 = null;

  constructor(private dataService:DataService,
              private formBuilder: FormBuilder) {
 
  }

  public uploader:FileUploader = new FileUploader({url: URL}); 

  ngOnInit() {
    this.technology = this.dataService.technology;
    this.technologySelected = this.dataService.technologySelected;
    this.categories = this.dataService.category;

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };

     this.initForm();

  }

  onSubmit(){
    console.log(this.portfolioForm.value);
  }

  onThumbSelected(event){
    console.log(event);
    this.selectedThumb = <File>event.target.files[0];
  }
  onMainSelected(event){
    this.selectedMain = <File>event.target.files[0];
  }
  onSlide1Selected(event){
    this.selectedSlide1 = <File>event.target.files[0];
  }
  onSlide2Selected(event){
    this.selectedSlide2 = <File>event.target.files[0];
  }

  private initForm(){
    this.portfolioForm = new FormGroup({
      'name' : new FormControl(''),
      'thumbImage' : new FormControl(this.selectedThumb),
      'mainImage' : new FormControl(this.selectedMain),
      'slide1Image' : new FormControl(this.selectedSlide1),
      'slide2Image' : new FormControl(this.selectedSlide2),
      'category' : new FormControl(''),
      'technology' : new FormArray([
        new FormControl(false),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),

      ]),
      'client' : new FormControl(''),
      'link' : new FormControl(''),
      'detail' : new FormControl(''),
      'rolls' : new FormControl('')
    })
  }

}
