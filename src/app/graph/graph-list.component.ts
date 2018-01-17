import { Component, Input, OnInit } from '@angular/core';
import { IGraph, IPerson, IOrganisation, IActivity, IRelations, IRelationArrow } from './graph';

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
    sizeRatio: number = 2;

    persons: IPerson[];
    activities: IActivity[];
    organisations: IOrganisation[];
     
    organisationRelations: IRelations[] = [];
    personRelations: IRelations[] = [];
    directingRelations : IRelationArrow[] = [];    

    graphRatio: number = 3;

    graphRatioPersons: number = 120;
    graphRatioActivities: number = 120;
    graphRatioOrganisation: number = 120;

    ngOnInit() {
        this.getData();
        this.setCoordinates();
        this.getRelationGraphs();
    }

    getData(): void {
        this.persons = [
            {
                id: "p1",
                name: "John",
                fullAddress: "New York",
                cx: 40.7128,
                cy: 74.0060,
                latitude: 40.7128,
                longitude: 74.0060,
                linkedActivities: ["a2"],
                linkedOrganizations: ["o1"]
            },
            {
                id: "p2",
                name: "Atul",
                fullAddress: "Chicago",
                cx: 41.8781,
                cy: 87.6298,
                latitude: 41.8781,
                longitude: 87.6298,
                linkedActivities: ["a2", "a1"],
                linkedOrganizations: ["o1"]
            },
            {
                id: "p3",
                name: "TPrasad",
                fullAddress: "New York",
                cx: 40.7128,
                cy: 74.0060,
                latitude: 40.7128,
                longitude: 74.0060,
                linkedActivities: ["a2"],
                linkedOrganizations: ["o1"]
            },
            {
                id: "p4",
                name: "AMishra",
                fullAddress: "Chicago",
                cx: 41.8781,
                cy: 87.6298,
                latitude: 41.8781,
                longitude: 87.6298,
                linkedActivities: ["a2", "a1"],
                linkedOrganizations: ["o1"]
            }
        ];

        this.activities = [
            {
                id: "a1",
                name: "Greg",
                fullAddress: "Canada",
                cx: 56.01304,
                cy: 106.3468,
                latitude: 56.01304,
                longitude: 106.3468,
                linkedOrganizations: ["o1"],
                linkedPersons: ["p1", "p2"]
            },
            {
                id: "a2",
                name: "Tirupati",
                fullAddress: "Mexico",
                cx: 23.6345,
                cy: 102.5528,
                latitude: 23.6345,
                longitude: 102.5528,
                linkedOrganizations: ["o1"],
                linkedPersons: ["p1"]
            },
            {
                id: "a3",
                name: "TPT",
                fullAddress: "Canada",
                cx: 56.01304,
                cy: 106.3468,
                latitude: 56.01304,
                longitude: 106.3468,
                linkedOrganizations: ["o1"],
                linkedPersons: ["p1", "p2"]
            },
            {
                id: "a4",
                name: "Prasad",
                fullAddress: "Mexico",
                cx: 23.6345,
                cy: 102.5528,
                latitude: 23.6345,
                longitude: 102.5528,
                linkedOrganizations: ["o1"],
                linkedPersons: ["p1"]
            },
            {
                id: "a5",
                name: "Debu",
                fullAddress: "Canada",
                cx: 56.01304,
                cy: 106.3468,
                latitude: 56.01304,
                longitude: 106.3468,
                linkedOrganizations: ["o1"],
                linkedPersons: ["p1", "p2"]
            },
            {
                id: "a6",
                name: "Pinaki",
                fullAddress: "Mexico",
                cx: 23.6345,
                cy: 102.5528,
                latitude: 23.6345,
                longitude: 102.5528,
                linkedOrganizations: ["o1"],
                linkedPersons: ["p1"]
            }
        ];

        this.organisations = [{
            id: "o1",
            name: "SID",
            fullAddress: "Brazil",
            cx: 570,
            cy: 300,
            latitude: 14.2350,
            longitude: 51.9253,
            linkedActivities: ["a1", "a2"],
            linkedPersons: ["p1", "p2"]
        }];

    }

    setCoordinates(): void {
        this.graphRatio = this.persons.length + this.activities.length;
        this.graphRatioPersons = (360 / this.graphRatio) * this.persons.length;
        this.graphRatioActivities = (360 / this.graphRatio) * this.activities.length;
        var personMax = (1140 / this.graphRatio) * this.persons.length;
        var activityMax = 1140;

        this.persons.forEach(eachObj => {
            eachObj.cx = (Math.random() * personMax) + 10;
            eachObj.cy = (Math.random() * 580) + 10;
        });

        this.activities.forEach(eachObj => {
            eachObj.cx = (Math.random() * (1120 - personMax)) + personMax;
            eachObj.cy = (Math.random() * 580) + 10;
        });
    }

    getRelationGraphs(): void {
        this.organisations.forEach(org => {
            var oid = org.id;
            this.persons.filter(p => p.linkedOrganizations.indexOf(oid) > -1).forEach(item => {
                var DX = ((org.cx + item.cx) / 2) + (Math.random() * 10);
                var DY = org.cy + (Math.random() * -10);
                var attrD = "M" + org.cx + "," + org.cy + " Q" + DX + "," + DY + " " + item.cx + "," + item.cy;
                
                var relation = {
                    mx: org.cx, my: org.cy, dx: DX, dy: DY, ex: item.cx, ey: item.cy, d: attrD
                };
                this.organisationRelations.push(relation);
            });
            this.activities.filter(a => a.linkedOrganizations.indexOf(oid) > -1).forEach(item => {
                var DX = ((org.cx + item.cx) / 2) + (Math.random() * 10);
                var DY = org.cy + (Math.random() * -10);;
                var attrD = "M" + org.cx + "," + org.cy + " Q" + DX + "," + DY + " " + item.cx + "," + item.cy;
                
                var relation = {
                    mx: org.cx, my: org.cy, dx: DX, dy: DY, ex: item.cx, ey: item.cy, d: attrD
                };
                this.organisationRelations.push(relation);
            });            
        });
        this.persons.forEach(person=>{
            var pid = person.id;
            this.activities.filter(a => a.linkedPersons.indexOf(pid) > -1).forEach(item => {
                var DX = ((person.cx + item.cx) / 2) + (Math.random() * 10);
                var DY = person.cy + (Math.random() * 15);;
                var attrD = "M" + person.cx + "," + person.cy + " Q" + DX + "," + DY + " " + item.cx + "," + item.cy;
                
                var relation = {
                    mx: person.cx, my: person.cy, dx: DX, dy: DY, ex: item.cx, ey: item.cy, d: attrD
                };
                this.personRelations.push(relation);
            });     
        });
    }

    getProperLatitudePoint(point: number): number {
        return point;
    }
    getProperLongitutePoint(point: number): number {
        return point;
    }

}
