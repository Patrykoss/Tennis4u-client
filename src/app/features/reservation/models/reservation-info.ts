import { Injectable } from "@angular/core";

export class ReservationInfo{
    constructor(
        public idTennisCourt: string,
        public number: number,
        public roof: string,
        public surface: string,
        public isLight: boolean,
        public price: number,
        public resDate: string,
        public availableHours: string[] = []
    ){}
}

@Injectable({
    providedIn: "root"
})
export class ReservationInfoAdapter {
    adapt(data: any): ReservationInfo {
        return new ReservationInfo(data.idTennisCourt, data.number, data. roof, data.surface, data.isLight, data.price, data.resDate, data.availableHours);
    }
}