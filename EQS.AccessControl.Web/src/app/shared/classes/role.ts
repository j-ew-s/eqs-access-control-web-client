import { RoleService } from './../../service/role.service';
import { Observable } from 'rxjs/Observable';
import { BaseClass } from './base/baseClass';

export class Role extends BaseClass {
    
    /**
    *
    */
    constructor(obj:Object, private service : RoleService) {
        super();
        this.id = obj["id"] != undefined ?  obj["id"] : -1 ;
        this.name =  obj["name"] != undefined ?  obj["name"] : "";
    }
}    