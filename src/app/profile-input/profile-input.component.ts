import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store'; 
import { Observable } from 'rxjs'; 
import * as profileActions from '../actions/profile.actions'; 


@Component({
  selector: 'app-profile-input',
  templateUrl: './profile-input.component.html',
  styleUrls: ['./profile-input.component.css']
})

export class ProfileInputComponent implements OnInit {

    name$: Observable<string>;

    constructor(
        private store: Store<{}>,
    ) { 
        this.name$ = store.pipe(select('name'))
        console.log(this.name$);   
    }

    setName(nameString: string){
        this.store.dispatch(profileActions.setName(
            {name: nameString}
            ))
    }

    ngOnInit(): void {
    }

}
