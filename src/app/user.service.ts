import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { 

  }

  public getAllUsers(): Observable<User[]> {
		return this.http.get<User[]>('http://localhost:3000/api/users');
	}
}
