import { Injectable } from "@angular/core";

export class TournamentInList{
    constructor(
        public idTournament: number,
        public tournamentName: string,
        public rank: number,
        public startDate: Date,
        public idWinner: number,
        public winnerName: string,
        public idTennisClub: number,
        public tennisClubName: string,
        public hasReservations: boolean
    ){}
}

@Injectable({
    providedIn: "root"
})
export class TournamentInListAdapter{
    adapt(data: any): TournamentInList {
        return new TournamentInList(data.idTournament, data.tournamentName, data.rank, data.startDate, data.idWinner, data.winnerName, data.idTennisClub, data.tennisClubName, data.hasReservations)
    }
}