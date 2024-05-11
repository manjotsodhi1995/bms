import { Auth } from "./auth";

export interface iRoot{
    auth: Auth
}
export class Root implements iRoot {
    auth: Auth;
    constructor()
    {
        this.auth = new Auth(this);
    }
}