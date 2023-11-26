import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { UsersEffects } from './users.effects';
import { UsersService } from '../service/users.service';
import { MODULES } from '../app.config';
import { coreReducer } from '../core/core.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(MODULES[MODULES.USER], coreReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
