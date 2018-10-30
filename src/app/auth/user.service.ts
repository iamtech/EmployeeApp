import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class UserService {

  uRole :string[];

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

}