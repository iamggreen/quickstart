import { Person } from "./person.ts";

export class People {
    items: Person[] = [];
    
    setPeople(items: Person[]) {
        this.items = items;        
    } 
    
    addPerson(item: Person) { 
        this.items = [...this.items, item];
    }
}