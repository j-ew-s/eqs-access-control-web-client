import { BaseClass } from './base/baseClass';

export class Role extends BaseClass {
    
    /**
    *
    */
    constructor(obj:Object) {
        super();
        this.id =  obj[0]!= undefined ?  obj[0]["id"] : 1 ;
        this.name = obj[0] != undefined ? obj[0]["name"] : "" ;
    }

}    