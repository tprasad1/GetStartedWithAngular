import { Component, Input, OnInit } from '@angular/core';
import { IGraph, IPerson, IOrganisation, IActivity } from './graph';

@Component({
    selector: 'graph-list',
    templateUrl: './graph-list.component.html',
    styleUrls: ['./graph-list.component.css']
})

export class GraphListComponent implements OnInit {
    @Input() filterOnLocation: string;
    @Input() filterOnName: string;
    @Input() filterOnArea: string;

    @Input() showPersons: boolean = false;
    @Input() showActivities: boolean = false;
    @Input() showOrganisation: boolean = false;
    @Input() showAll: boolean = true;

    @Input() width: number = 1080.00;
    height: number = 540;
    ratio: number = 2;

    persons: IPerson[];
    activities: IActivity[];
    organisations: IOrganisation[];

    ngOnInit() {
        this.ratio = this.width / 360.00;
        this.height = this.width / 2;
        this.persons = [
            {
                id: "p1",
                name: "John" + this.ratio.toString(),
                fullAddress: "New York",
                latitude: this.getProperLatitudePoint(40.7128),
                longitude: this.getProperLongitutePoint(74.0060),
                linkedActivities: ["a2"],
                linkedOrganizations: ["o1"]
            },
            {
                id: "p2",
                name: "Atul",
                fullAddress: "Chicago",
                latitude: this.getProperLatitudePoint(41.8781),
                longitude: this.getProperLongitutePoint(87.6298),
                linkedActivities: ["a2", "a1"],
                linkedOrganizations: ["o1"]
            }
        ];

        this.activities = [
            {
                id: "a1",
                name: "Greg",
                fullAddress: "Canada",
                latitude: this.getProperLatitudePoint(56.01304),
                longitude: this.getProperLongitutePoint(106.3468),
                linkedOrganizations: ["o1"],
                linkedPersons: ["p1", "p2"]
            },
            {
                id: "a2",
                name: "Tirupati",
                fullAddress: "Mexico",
                latitude: this.getProperLatitudePoint(23.6345),
                longitude: this.getProperLongitutePoint(102.5528),
                linkedOrganizations: ["o1"],
                linkedPersons: ["p1"]
            }
        ];

        this.organisations = [{
            id: "o1",
            name: "SID",
            fullAddress: "Brazo",
            latitude: this.getProperLatitudePoint(14.2350),
            longitude: this.getProperLongitutePoint(51.9253),
            linkedActivities: ["a1", "a2"],
            linkedPersons: ["p1", "p2"]
        }];
    }

    getProperLatitudePoint(point:number): number{
        return point;
    }
    getProperLongitutePoint(point: number):number{
        return point;
    }

}
