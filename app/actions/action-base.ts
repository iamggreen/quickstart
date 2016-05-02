import { AppState } from  "../models/app-state";
 
export abstract class ActionBase {
    abstract execute(state: AppState): void;
} 