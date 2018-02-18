import { BaseClass } from './base/baseClass';
import { AuthenticationService } from './../../service/authentication.service';

export class Credential extends BaseClass {

    constructor(obj:Object) {
        super();
        this.id = obj["id"] != undefined ?  obj["id"] : -1 ;
        this.name =  obj["name"] != undefined ?  obj["name"] : "";
    }

}