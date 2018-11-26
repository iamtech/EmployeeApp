import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    try{
      return this.http.post<any>('http://localhost:8093/auth', credentials);
            //.catch((e: any) => Observable.throw(this.errorHandler(e)));
      }
      catch{
        console.log('from catch');
      }    
  }

  errorHandler(error: any): void {
    console.log('from AuthService',error)
  }

}