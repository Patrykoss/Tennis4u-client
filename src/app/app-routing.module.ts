import { TournamentMatchesComponent } from './features/tournament/tournament-matches/tournament-matches.component';
import { TournamentPlayersComponent } from './features/tournament/tournament-players/tournament-players.component';
import { ProfileMatchesComponent } from './features/profile/profile-matches/profile-matches.component';
import { ProfileReservationsComponent } from './features/profile/profile-reservations/profile-reservations.component';
import { ProfileInfoComponent } from './features/profile/profile-info/profile-info.component';
import { ClientsReservationResolver } from './features/reservation/reservation-form/clients-reservation.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuardService } from './core/services/authorization-guard.service';
import { LoginFormComponent } from './features/auth/login-form/login-form.component';
import { RegisterFormComponent } from './features/auth/register-form/register-form.component';
import { HomeComponent } from './features/home/home.component';
import { ReservationFormComponent } from './features/reservation/reservation-form/reservation-form.component';
import { ReservationInfoResolver } from './features/reservation/reservation-form/reservation-info.resolver';
import { TennisClubInfoComponent } from './features/tennis-club/tennis-club-info/tennis-club-info.component';
import { ReservationsScheduleResolver } from './features/tennis-club/tennis-club-reservations/reservations-schedule.resolver';
import { TennisClubReservationsComponent } from './features/tennis-club/tennis-club-reservations/tennis-club-reservations.component';
import { WorkHourResolver } from './features/tennis-club/tennis-club-reservations/work-hour.resolver';
import { TennisClubTournamentsComponent } from './features/tennis-club/tennis-club-tournaments/tennis-club-tournaments.component';
import { TennisClubsComponent } from './features/tennis-club/tennis-clubs/tennis-clubs.component';
import { TournamentInfoComponent } from './features/tournament/tournament-info/tournament-info.component';
import { TournamentsComponent } from './features/tournament/tournaments/tournaments.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '', component: HomeComponent},
	{ path: 'register', component: RegisterFormComponent },
	{ path: 'login', component: LoginFormComponent },
	{ path: 'tennisClubs', component: TennisClubsComponent},
	{ path: 'tournaments', component: TournamentsComponent},
	{ path: 'tennisClubs/:idTennisClub', component: TennisClubInfoComponent},
	{ path: 'tennisClubs/:idTennisClub/reservations', component: TennisClubReservationsComponent, resolve: {workingHours: WorkHourResolver, reservations: ReservationsScheduleResolver}, canActivate: [AuthorizationGuardService], data: { expectedRole: ['Client','Worker','Manager']}},
	{ path: 'tennisClubs/:idTennisClub/tournaments', component: TennisClubTournamentsComponent},
	{ path: 'reservations/tennisClub/:idTennisClub/tennisCourt/:idTennisCourt/date/:date/time/:time', resolve: {reservationInfo: ReservationInfoResolver, clients: ClientsReservationResolver}, canActivate: [AuthorizationGuardService], component: ReservationFormComponent, data: { expectedRole: ['Client','Worker','Manager']}},
	{ path: 'users/:idUser', component: ProfileInfoComponent, canActivate: [AuthorizationGuardService], data: { expectedRole: ['Client','Worker','Manager']}},
	{ path: 'users/:idUser/reservations', component: ProfileReservationsComponent, canActivate: [AuthorizationGuardService], data: { expectedRole: ['Client','Worker','Manager']} },
	{ path: 'users/:idUser/matches', component: ProfileMatchesComponent, canActivate: [AuthorizationGuardService], data: { expectedRole: ['Client','Worker','Manager']}},
	{ path: 'tournaments/:idTournament', component: TournamentInfoComponent, canActivate: [AuthorizationGuardService], data: { expectedRole: ['Client','Worker','Manager']}},
	{ path: 'tournaments/:idTournament/players', component: TournamentPlayersComponent, canActivate: [AuthorizationGuardService], data: { expectedRole: ['Client','Worker','Manager']} },
	{ path: 'tournaments/:idTournament/matches', component: TournamentMatchesComponent, canActivate: [AuthorizationGuardService], data: { expectedRole: ['Client','Worker','Manager']}},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
