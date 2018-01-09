import { Component } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  pageTitle :string = 'Getting Started'; 

  ngOnInit(){
    jQuery('button.side-navbar-btn').click(function () {
      var isLeftNegative = jQuery(this).parent().hasClass('slide-left');
      if (isLeftNegative) {
          jQuery(this).parent().css('left', '0');
          jQuery('div.content-body').css('margin-left', '150px');
          jQuery(this).parent().removeClass('slide-left');
      }
      else {
          jQuery(this).parent().css('left', '-150px');
          jQuery('div.content-body').css('margin-left', '0px');
          jQuery(this).parent().addClass('slide-left');
      }        
  });
  jQuery('button.side-navbar-btn').click();
  }
}
