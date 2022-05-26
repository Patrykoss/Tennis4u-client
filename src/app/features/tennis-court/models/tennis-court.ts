import { Injectable } from "@angular/core";

export class TennisCourt{
    constructor(
        public idTennisCourt: number,
        public number: number,
        public idTennisClub: number,
        public roof: string,
        public surface: string,
    ){

    }
}

@Injectable({
    providedIn: "root"
})
export class TennisCourtAdapter {
    adapt(data: any): TennisCourt {
        return new TennisCourt(data.idTennisCourt,data.number,data.idTennisClub,data.roof,data.surface);
    }
}