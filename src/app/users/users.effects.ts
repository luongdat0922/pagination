import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { MODULES } from '../app.config';
import { CoreEffects } from '../core/core.effects';
import { IUserList, User } from '../model/user';
import { UsersService } from '../service/users.service';

const moduleName = MODULES.USER;

@Injectable()
export class UsersEffects extends CoreEffects<User, IUserList> {

	public constructor(
		private actions$: Actions,
		private service: UsersService) {

		super(moduleName, actions$, service);

	}

}