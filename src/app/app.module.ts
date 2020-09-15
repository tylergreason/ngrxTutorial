import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store'; 
import { counterReducer } from './reducers/counter.reducer';
import { profileReducer } from './reducers/profile.reducer'; 

import { MyCounterComponent } from './my-counter/my-counter.component';
import { ProfileInputComponent } from './profile-input/profile-input.component';


@NgModule({
  imports: [
      BrowserModule,
      StoreModule.forRoot({ count: counterReducer, profile:profileReducer})
],
  declarations: [AppComponent, MyCounterComponent, ProfileInputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/