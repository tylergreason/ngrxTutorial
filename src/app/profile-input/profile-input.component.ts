import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store'; 
import { Observable } from 'rxjs';  
import { setName } from '../actions/profile.actions'; 


@Component({
  selector: 'app-profile-input',
  templateUrl: './profile-input.component.html',
  styleUrls: ['./profile-input.component.css']
})

export class ProfileInputComponent implements OnInit {

    profile$: Observable<string>

    constructor(
        private store: Store<{}>,
    ) { 
        this.profile$ = store.pipe(select('profile'));
    }

    setName(nameString: string){
        this.store.dispatch(setName(
            {name: nameString}
            ))
    }

    ngOnInit(): void {
        this.setName('carl');
    }

}
