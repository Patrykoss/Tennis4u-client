import { Injectable } from "@angular/core";

export class Reservation{
    constructor(
        public idTennisCourt: string,
        public reservationHours: string[] = []
    ){}
}

@Injectable({
    providedIn: "root"
})
export class ReservationAdapter {
    adapt(data: any): Reservation {
        return new Reservation(data.idTennisCourt, data.reservationHours)
    }
}