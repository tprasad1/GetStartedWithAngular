import { Component, Input, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent implements OnInit {
    @Input() showSideNav: string = "false";
    CssClass: string = "side-nav-menu";

    ngOnInit() {
        switch (this.showSideNav) {
            case "true": this.CssClass = "side-nav-menu";
                break;

            case "false": this.CssClass = "visible-xs";
                break;
        }       
    }
}
