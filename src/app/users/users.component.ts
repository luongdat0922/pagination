import { Component, OnInit } from '@angular/core';
import { CoreComponent } from '../core/core.component';
import { User } from '../model/user';
import { Store } from '@ngrx/store';
import { IState } from '../core/core.model';
import { MODULES } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends CoreComponent<User> implements OnInit {

  constructor(protected _store: Store<IState<User>>) {
    super(MODULES.USER, _store);
  }

  ngOnInit(): void {

    this.dispatchGet();

    this.state$.subscribe((e: IState<User>) => console.log(e));

  }

}
