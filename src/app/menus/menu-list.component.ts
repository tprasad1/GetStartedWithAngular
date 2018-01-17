import { Component, Input, OnInit } from '@angular/core';
import { Menu } from './menu';
import { MenuService } from './menu.service';

@Component({
    selector: 'menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent implements OnInit {
    @Input() showSideNav: string = "false";
    menus: Menu[] = [];

    constructor(private _menuProvider: MenuService) {

    }
    ngOnInit() {
        this.menus = this._menuProvider.getMenu();
    }
}
