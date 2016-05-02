import { ActionBase } from "./action-base";
import { AppState } from  "../models/app-state"; 
import { Person } from "../models/person";
 
export class AddPersonAction extends ActionBase { 
    name: string;
    age: number;
    
    execute(state: AppState) { 
        let person: Person = new Person();
        person.name = this.name;
        person.age = this.age;
        
        state.people.addPerson(person);
    }
}