import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination/pagination.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './users/user.reducer';
import { UserEffects } from './users/user.effect';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    EffectsModule.forRoot([UserEffects]),
    HttpClientModule,
    StoreModule.forRoot({ users: userReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
