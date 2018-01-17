export interface IMenu {
   link:string;
   text:string;   
}
export class Menu implements IMenu{
    link:string = "";
    text:string = "";
    subMenu: Menu[] = [];
}