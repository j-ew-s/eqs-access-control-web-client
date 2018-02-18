import { BaseClass } from './base/baseClass';
import { AuthenticationService } from './../../service/authentication.service';

export class Credential {

    constructor(obj:Object) {
        this.id = obj["id"] != undefined ?  obj["id"] : -1 ;
        this.username =  obj["username"] != undefined ?  obj["username"] : "";
        this.password =  obj["password"] != undefined ?  obj["password"] : "";
    }

    id : number;
    username : string = "";
    password : string = "";

}