import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Params, Data, Router } from "@angular/router";
import * as $ from 'jquery';
import * as isotope from 'isotope-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'pkanvi';
  admin = true;
  admin_wrap = '';

  constructor(private route:ActivatedRoute, private router:Router){}

  ngDoCheck(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
    
      var target = this.hash,
      $target = $(target);
    
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
    if(this.router.url.slice(1) == 'admin'){
      this.admin = false;
      this.admin_wrap = 'admin_wrap';
    } 
  }
}