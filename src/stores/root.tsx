import { Auth } from "./auth";
import { Event } from "./event";
export interface iRoot{
    auth: Auth
    event:Event
}
export class Root implements iRoot {
    auth: Auth;
    event: Event;
    constructor()
    {
        this.auth = new Auth(this);
        this.event = new Event(this);
    }
}