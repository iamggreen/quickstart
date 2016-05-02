import {Component} from 'angular2/core';
import { State, AppDispatcher } from "./start";
import "rxjs/add/operator/map";
import { AddPersonAction, SetPeopleAction } from "./actions/actions";
import { Person } from "./models/person";

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li *ngFor="let person of people | async">
                {{person.name}} is {{person.age}} years old.
            </li>
        </ul>
        <div>
            <input type="text" placeholder="Name" [(ngModel)]="name"/>
            <input type="number" placeholder="Age" [(ngModel)]="age"/>
            <button (click)="add()">Add</button>
        </div>
    `
})
export class AppComponent {
    name: string;
    age: number;
     
    constructor(private _state: State, private _dispatcher: AppDispatcher) { }
    
    ngOnInit() { 
            let action = new SetPeopleAction();
            action.people = [ { name: "Amy", age: 32 }, { name: "Hailey", age: 9 }];
            this._dispatcher.next(action);
    }
    
    get people() { return this._state.current$.map(state => state.people.items); }
    
    add() { 
        if(this.name && this.age) { 
            let action = new AddPersonAction();
            action.name = this.name;
            action.age = this.age;
            this._dispatcher.next(action);
        }
    }
}
