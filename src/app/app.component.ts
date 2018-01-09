import { Component } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Getting Started';
  showSideNav: boolean = false;

  toggleSideNav():void {
    this.showSideNav = !this.showSideNav;
  }
}
