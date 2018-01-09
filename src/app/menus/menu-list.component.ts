import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from './menu';

declare var jQuery: any;

@Component({
    selector: 'menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent implements OnInit {
    @Input() showSideNav: string = "false";    
    menus: IMenu[] = [
        {
            link:"/home",
            text:"Home"
        },
        {
            link:"/about-us",
            text:"About Us"
        }
    ];

    ngOnInit() {
        
    }
}
