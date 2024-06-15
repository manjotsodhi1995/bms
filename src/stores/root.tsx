import { Auth } from "./auth";
import { Event } from "./event";
import { TicketStore } from "./ticket";
export interface iRoot{
    auth: Auth
    event:Event
    ticketStore: TicketStore
}
export class Root implements iRoot {
    auth: Auth;
    event: Event;
    ticketStore: TicketStore
    constructor()
    {
        this.auth = new Auth(this);
        this.event = new Event(this);
        this.ticketStore = new TicketStore(this);
    }
}