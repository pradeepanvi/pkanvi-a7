import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../../../../../shared/data.service';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from '../../../../../shared/project.interface';

const URL = 'http://localhost:3000/uploads/';

@Component({
  selector: 'app-portfolio-dashboard-edit',
  templateUrl: './portfolio-dashboard-edit.component.html',
  styleUrls: ['./portfolio-dashboard-edit.component.scss']
})
export class PortfolioDashboardEditComponent implements OnInit {
  portfolioForm:FormGroup;
  id:any;
  editMode = false;
  technology:any;
  categories:any;
  selectedThumb = null;
  selectedMain = null;
  selectedSlide1 = null;
  selectedSlide2 = null;

  constructor(private dataService:DataService,
              private http:HttpClient,
              private router:Router, 
              private route:ActivatedRoute) {
 
  }

  public uploader:FileUploader = new FileUploader({url: URL}); 

  ngOnInit() {
    this.technology = this.dataService.technology;
    this.categories = this.dataService.category;

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )

  }

  onSubmit(){
    if(this.editMode){
      const updateOps = [
        { "propName": "name", "value": this.portfolioForm.value.name},
        { "propName": "thumbImage", "value": this.portfolioForm.value.thumbImage},
        { "propName": "mainImage", "value": this.portfolioForm.value.mainImage},
        { "propName": "slide1Image", "value": this.portfolioForm.value.slide1Image},
        { "propName": "slide2Image", "value": this.portfolioForm.value.slide2Image},
        { "propName": "category", "value": this.portfolioForm.value.category},
        { "propName": "technology", "value": this.portfolioForm.value.technology},
        { "propName": "client", "value": this.portfolioForm.value.client},
        { "propName": "link", "value": this.portfolioForm.value.link},
        { "propName": "detail", "value": this.portfolioForm.value.detail},
        { "propName": "rolls", "value": this.portfolioForm.value.rolls}
      ];
      this.http.patch('http://localhost:3000/project/'+this.id, updateOps).subscribe(
        (res) => {
          console.log(res);
        }
      )
      this.router.navigate(['../../'], {relativeTo: this.route})
    } else {
      this.http.post('http://localhost:3000/project', this.portfolioForm.value).subscribe(
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
    if(this.editMode){
      this.http.get('http://localhost:3000/project/'+this.id).subscribe(
        (res: Project) => {
          this.portfolioForm = new FormGroup({
            'name' : new FormControl(res.project.name),
            'thumbImage' : new FormControl(this.selectedThumb),
            'mainImage' : new FormControl(this.selectedMain),
            'slide1Image' : new FormControl(this.selectedSlide1),
            'slide2Image' : new FormControl(this.selectedSlide2),
            'category' : new FormControl(res.project.category),
            'technology' : new FormArray([
              new FormControl(res.project.technology[0]),
              new FormControl(res.project.technology[1]),
              new FormControl(res.project.technology[2]),
              new FormControl(res.project.technology[3]),
              new FormControl(res.project.technology[4]),
              new FormControl(res.project.technology[5]),
              new FormControl(res.project.technology[6]),
              new FormControl(res.project.technology[7]),
              new FormControl(res.project.technology[8]),
              new FormControl(res.project.technology[9]),
      
            ]),
            'client' : new FormControl(res.project.client),
            'link' : new FormControl(res.project.link),
            'detail' : new FormControl(res.project.detail),
            'rolls' : new FormControl(res.project.rolls)
          })
        }
      )
    }
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
