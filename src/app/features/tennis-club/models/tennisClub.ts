import { Injectable } from "@angular/core";
import { WorkDay } from "./workDay";

export class TennisClub{
    constructor(
        public idTennisClub: number,
        public clubName: string,
        public city: string,
        public street: string,
        public postcode: string,
        public phoneNumbers: WorkDay[] = [],
        public website: string,
        public email: string,
        public logo: string
    ){}
}

@Injectable({
    providedIn: "root"
})
export class TennisClubAdapter {
    adapt(data: any): TennisClub {
        return new TennisClub(data.idTennisClub, data.clubName, data.city, data.street, data.postcode, data.phoneNumbers, data.website, data.email, data.logo)
    }
}