import { Injectable } from "@angular/core";

export class WorkHour{
    constructor(
        public hour: string,
    ){}
    
}

@Injectable({
    providedIn: "root"
})
export class WorkHourAdapter {
    adapt(data: any): WorkHour {
        return new WorkHour(data.hour);
    }
}