export interface IGraph {
    id: string;
    name: string;
    cx: number;
    cy: number;
    latitude: number;
    longitude: number;
    fullAddress: string;    
}
export interface IPerson extends IGraph {
    linkedOrganizations: string[];
    linkedActivities: string[];
}
export interface IOrganisation extends IGraph {
    linkedPersons: string[];
    linkedActivities: string[];
}
export interface IActivity extends IGraph {
    linkedOrganizations: string[];
    linkedPersons: string[];
}
export interface IRelations {
    mx: number;
    my: number;
    dx: number;
    dy: number;
    ex: number;
    ey: number;
    d:string;
}
export interface IRelationArrow{
    x1:number;
    y1:number;
    x2:number;
    y2:number;
}