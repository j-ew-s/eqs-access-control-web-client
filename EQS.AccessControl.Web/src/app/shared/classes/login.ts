import { AuthenticationService } from './../../service/authentication.service';

export class Login {

    constructor(obj: object) {
        this.username = obj['username'];
        this.password = obj['password'];
    }

    username: string;
    password: string;

}