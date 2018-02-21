import { BadInput } from './../../../shared/common/error/bad-input-error';
import { AppError } from './../../../shared/common/error/base/app-error';
import { NotFoundError } from './../../../shared/common/error/notfound-error';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

export class SpecificErrorHandler {
    handleError(error: Response) {
        if (error.status === 400)
            return Observable.throw(new BadInput(error));
        if (error.status === 404)
            return Observable.throw(new NotFoundError(error));
        return Observable.throw(new AppError(error));
    }
}