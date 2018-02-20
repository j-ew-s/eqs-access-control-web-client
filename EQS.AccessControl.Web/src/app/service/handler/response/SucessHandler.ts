import { ApiResponse } from './../../../shared/classes/api-response/api-response';

export class SuccessHandler {
    constructor(obj: any) {
        debugger;
        this.reponse = new ApiResponse(obj);
    }

    reponse: ApiResponse;

    error(){
        return this.reponse.error;
    }

    messages(){
        return this.reponse.message;
    }

    payload(){
        return this.reponse.payload;
    }

}