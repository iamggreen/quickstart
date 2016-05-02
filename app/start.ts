import {bootstrap}    from 'angular2/platform/browser';
import { provide, OpaqueToken } from "angular2/core";
import {AppComponent} from './app.component';
import { AppState } from "./models/app-state";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ActionBase } from "./actions/action-base";
import "rxjs/add/operator/scan";

export class AppDispatcher {
    constructor(private _dispatcher: Subject<ActionBase>) { }
    
    next(action: ActionBase) { 
        this._dispatcher.next(action);
    }
}

export class State {
    current$: Observable<AppState>;
    
    constructor(initState: AppState, actions: Observable<ActionBase>) { 
        
        const obs: Observable<AppState> = actions.scan((state, action) => {
            action.execute(state);
            
            return state;
        }, initState);
        
        const subject: BehaviorSubject<AppState>= new BehaviorSubject<AppState>(initState);
        obs.subscribe(s => subject.next(s));
                
        this.current$ = subject.asObservable();        
    }
}