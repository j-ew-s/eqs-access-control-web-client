import { BaseClass } from './base/baseClass';

export class Role extends BaseClass {
    
    /**
    *
    */
    constructor(obj:Object) {
        super();
        console.log(obj);
        this.id = obj[0]["id"];
        this.name = obj[0]["name"];
    }

}    