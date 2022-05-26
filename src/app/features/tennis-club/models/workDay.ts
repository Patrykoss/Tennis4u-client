import { Time } from "@angular/common";
import { Injectable } from "@angular/core";

export class WorkDay{
    constructor(
        public dayName: string,
        public openHour: Time,
        public closeHour: Time,
    ){}
    
}

@Injectable({
    providedIn: "root"
})
export class WorkDayAdapter {
    adapt(data: any): WorkDay {
        return new WorkDay(data.dayName, data.openHour, data.closeHour);
    }
}