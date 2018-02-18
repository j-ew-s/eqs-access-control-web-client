import { Credential } from './credential';
import { Role } from './role';
import { BaseClass } from './base/baseClass';

export class User extends BaseClass {

    constructor(obj: Object) {
        super();
        this.id = obj["id"];
        this.name = obj["name"];
        this.credential = this.getCredentials(obj['credential']);
        this.roles = this.getRoles(obj['roles']);
    }

    roles: Role[] = [];
    credential: Credential[] = [];

    getCredentials(credentialsObj: any[]): Credential[] {
        let credentials: Credential[] = [];
        for (let credential of credentialsObj) {
            credentials.push(new Role(credential));
        }
        return credentials;
    }

    getRoles(rolesObj: any[]): Role[] {
        let roles: Role[] = [];
        for (let role of rolesObj) {
            roles.push(new Role(role));
        }
        return roles;
    }
}    