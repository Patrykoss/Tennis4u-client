import { Injectable } from "@angular/core";
import { TennisCourt } from "../../tennis-court/models/tennis-court";
import { WorkHour } from "./workHour";

export class ClubHours{
    constructor(
        public courts: TennisCourt[] = [],
        public workHours: WorkHour[] = []
    ){}
}

@Injectable({
    providedIn: "root"
})
export class ClubHoursAdapter {
    adapt(data: any): ClubHours {
        return new ClubHours(data.numberOfCourts, data.workHours)
    }
}