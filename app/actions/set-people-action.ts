import { ActionBase } from "./action-base";
import { AppState } from  "../models/app-state"; 
import { Person } from "../models/person";
 
export class SetPeopleAction extends ActionBase { 
    people: Person[] = [];
    
    execute(state: AppState) {        
        state.people.setPeople(this.people);
    }
}