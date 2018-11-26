import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class UserService {

  uRole :string[];
  errStatus:number;

  get userRole():string[]{
      return this.uRole;
  }

  set userRole(newRoles:string[]){
    if(newRoles.length>0){
      this.uRole = newRoles;
    }
  }

  get isAdmin():boolean{
    return this.uRole.includes('ROLE_ADMIN');
  }

  get errStatusCode():number{
    return this.errStatus;
  }

  set errStatusCode(code:number){
    if(code != undefined){
      this.errStatus = code;
    }
  }

}