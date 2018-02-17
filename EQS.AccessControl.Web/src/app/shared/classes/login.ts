import { AuthenticationService } from './../../service/authentication.service';

export class Login {

    constructor(obj: object, private service: AuthenticationService) {
        this.username = obj['username'];
        this.password = obj['password'];
    }

    username: string;
    password: string;

    doLogin() {
        this.service.login(this).subscribe(r => {
            debugger;
            let result = r['payload'][0];

            if (result && result.token) {
                this.saveToken(result.token);
            }
            this.service.getCurrentUser();
            this.service.getCurrentUserRoles();
        });
    }

    doLogOut() {
        this.service.removeFromLocalStorage();
    }

    isLogedIn() {
        return this.service.isTokenNotExpired();
    }

    saveToken(result) {
        this.service.addToLocalStorage(result);
    }

}