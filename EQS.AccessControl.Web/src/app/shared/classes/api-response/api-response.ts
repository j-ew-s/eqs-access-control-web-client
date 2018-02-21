export class ApiResponse {

    constructor(obj: any) {
        this.payload = obj["payload"] != undefined ? obj["payload"] : [];
        this.status = obj["status"] != undefined ? obj["status"] : "";
        this.resultLength = obj["resultLength"] != undefined ? obj["resultLength"] : 0;
        this.message = obj["message"] != undefined ? obj["message"] : [];
        this.error = obj["error"] != undefined ? obj["error"] : false;
    }

    payload: any[] = [];
    status: any;
    resultLength: number;
    message: any[] = [];
    error: boolean = false;
}