import { Credential } from './credential';
import { Role } from './role';
import { BaseClass } from './base/baseClass';

export class User extends BaseClass {

    constructor(obj: Object) {
        super();
        this.id = obj["id"] != undefined ?  obj["id"] : -1 ;
        this.name =  obj["name"] != undefined ?  obj["name"] : "";
        this.credential = obj["credential"] != undefined ? obj['credential'] : new Credential(new Object(0));
        this.roles = obj["roles"] != undefined ? this.getRoles(obj['roles']) : [];

        console.log("USEROBJ ", this);
    }

    roles: Role[] = [];
    credential: Credential[] = [];

    getRoles(rolesObj: any[]): Role[] {
        let roles: Role[] = [];
        for (let role of rolesObj) {
            roles.push(new Role(role));
        }
        return roles;
    }
}    