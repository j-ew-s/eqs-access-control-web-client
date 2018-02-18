export class ApiUrls {

    /* BASE */
    base_url: string = "http://localhost:13000/api/";

    /* LOGIN API */
    login_url: string = this.base_url + "login";

    /* ROLE API*/
    role_base: string = this.base_url + "role/";

    /* register API*/
    register_base: string = this.base_url + "register/";

    constructor() { }
}