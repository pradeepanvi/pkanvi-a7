import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    console.log(this.contactForm.value);
    this.http.post('http://pkanvi.com/send.php', this.contactForm.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log('Error');
        }
      )
  }

  private initForm(){
    this.contactForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required),
      'phone' : new FormControl('', Validators.required),
      'msg' : new FormControl('')
    })
  }

}
