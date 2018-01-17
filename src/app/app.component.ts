import { Component } from '@angular/core';
import { MenuService } from './menus/menu.service';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MenuService]
})

export class AppComponent {
  pageTitle: string = 'Getting Started';
  showSideNav: boolean = false;

  toggleSideNav():void {
    this.showSideNav = !this.showSideNav;
  }
}
