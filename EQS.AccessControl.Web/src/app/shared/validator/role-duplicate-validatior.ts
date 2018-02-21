import { RoleService } from './../../service/role.service';
import { FormControl } from '@angular/forms'

export class RoleDuplicateValidator {

    constructor(private roleService: RoleService) { }

    static shouldBeValid(control: FormControl) {
        // TODO:  IMPLEMENT API CALL
        return null
    }

}