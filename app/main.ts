import {bootstrap}    from 'angular2/platform/browser';
import { provide } from "angular2/core";
import {AppComponent} from './app.component';
import { AppState } from "./models/app-state";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ActionBase } from "./actions/action-base";
import { AppDispatcher, State } from "./start";

const dispatcher = new Subject<ActionBase>();

bootstrap(AppComponent,[
    provide(AppDispatcher, { useValue: new AppDispatcher(dispatcher) }),
    provide(State, { useFactory: () => new State(new AppState(), dispatcher) })
]);