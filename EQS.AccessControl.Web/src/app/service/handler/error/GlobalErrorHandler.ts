import { ErrorHandler } from '@angular/core'
export class GlobalErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        console.log("A generic error occur. A next step should add LogError API call.");
        alert("A generic error occurr. Contact Admin");
    }

}