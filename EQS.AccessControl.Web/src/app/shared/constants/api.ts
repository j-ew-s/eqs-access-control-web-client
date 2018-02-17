export class ApiUrls{
    
    base_url:string = "http://localhost:13000/api/";

    /* LOGIN APIS */
    login_url:string = this.base_url + "login";

    /* ROLE APIS*/
    role_getAll:string = this.base_url + "role";

    constructor() {
     
    }
}