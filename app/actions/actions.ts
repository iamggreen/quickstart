import { AddPersonAction } from "./add-person-action";
import { SetPeopleAction } from "./set-people-action";

export { AddPersonAction, SetPeopleAction };

export type Action = AddPersonAction | SetPeopleAction;