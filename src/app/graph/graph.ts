export interface IGraph {
    id: string;
    name: string;    
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
    mx:string;
    my:string;
    dx:string;
    dy:string;
    ex:string;
    ey:string;
}