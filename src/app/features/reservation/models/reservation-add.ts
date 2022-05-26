import { Time } from "@angular/common";

export class ReservationAdd{
    constructor(
        public idTennisCourt: number,
        public reservationDate: Date,
        public startReservation: Time,
        public AmountOfReservation: number
    ){ }
}