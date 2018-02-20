import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { BaseController } from './../../shared/base-controller/base-controller.interface';

export class PreventLoseUnsavedChanges implements CanDeactivate<BaseController>{
  
  canDeactivate(component: BaseController){
      if(component.isFormDirty() && !component.isSaveMethod)
      {
          return confirm("Do you want to lose your changes?");
      }
      else
          return true;
  }
}
