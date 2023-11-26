import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { CoreService } from '../core/core.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends CoreService<User> {

  constructor(protected override http: HttpClient) {
    super('users', http);
  }
  
}