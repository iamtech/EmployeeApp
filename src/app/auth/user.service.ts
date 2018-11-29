import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class UserService {

  uRole :string[];
  errStatus:number;

  get userRole():string[]{
    this.uRole = JSON.parse(sessionStorage.getItem("userRole"))
      return this.uRole;
  }

  set userRole(newRoles:string[]){
    if(newRoles.length>0){
      this.uRole = newRoles;
    }
  }

  get isAdmin():boolean{
    this.uRole = JSON.parse(sessionStorage.getItem("userRole"))
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