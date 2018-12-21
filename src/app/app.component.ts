import { Component, DoCheck } from '@angular/core';
import * as $ from 'jquery';
import * as isotope from 'isotope-layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'pkanvi';

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



  }
}