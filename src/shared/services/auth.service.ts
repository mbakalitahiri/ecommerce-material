import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestDataSource } from '../../model/rest.datasource';
@Injectable()
export class AuthService {
  dentro = new BehaviorSubject<boolean>(false);
  constructor(private datasource: RestDataSource) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }
  get authenticated() {
    this.datasource.auth_token != null ? this.dentro.next(true) : false;

    return this.datasource.auth_token  != null
  }
  clear() {
    this.datasource.auth_token = '';
  }
}
