export class Store {
	Name:string
 branches:string[];
	Logo:string;

    constructor(_Name:string,_branches:string[],_logo:string){
           this.Name=_Name;
           this.branches=_branches;
           this.Logo=_logo;
    }

}
