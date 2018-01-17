import { Injectable } from "@angular/core";
import { Menu } from './menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MenuService {
    private _menuUrl: '';
    constructor(private _http: HttpClient) {

    }

    getMenu(): Menu[] {
        return [
            {
                link: "/home",
                text: "Home",
                subMenu: []
            },
            {
                link: "/company",
                text: "Company",
                subMenu: [
                    {
                        link: '/about-us',
                        text: 'About Us',
                        subMenu: []
                    },
                    {
                        link: '/clients',
                        text: 'Our Clients',
                        subMenu: []
                    }
                ]
            }
        ];
    }
}