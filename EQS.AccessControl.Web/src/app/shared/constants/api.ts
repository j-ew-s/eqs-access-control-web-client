export class ApiUrls {

    /* BASE */
    base_url: string = "http://localhost:13000/api/";

    /* LOGIN API */
    login_url: string = this.base_url + "login";

    /* ROLE API*/
    role_base: string = this.base_url + "role/";
    role_filterSearch: string = this.role_base + "GetByExpression/";

    /* register API*/
    register_base: string = this.base_url + "register/";
    register_getAll: string = this.base_url + "register/GetAll";
    register_filterSearch: string = this.base_url + "register/GetByExpression";

    constructor() { }
}