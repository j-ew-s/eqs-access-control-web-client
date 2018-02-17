import { Role } from './role';
import { BaseClass } from './base/baseClass';

export class User extends BaseClass {
    
    constructor(obj:Object) {
        super();
        this.id = obj["id"];
        this.name = obj["name"];
    }
    roles : Role[]=[];
    credential: any[] =[];
}    