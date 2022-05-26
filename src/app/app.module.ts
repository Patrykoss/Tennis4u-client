import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './features/auth/register-form/register-form.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import {MatSelectModule} from '@angular/material/select'

import { LoginFormComponent } from './features/auth/login-form/login-form.component';
import { HomeComponent } from './features/home/home.component';
import { TennisClubsComponent } from './features/tennis-club/tennis-clubs/tennis-clubs.component';
import { TournamentsComponent } from './features/tournament/tournaments/tournaments.component';
import { TournamentInfoComponent } from './features/tournament/tournament-info/tournament-info.component';
import { TennisClubInfoComponent } from './features/tennis-club/tennis-club-info/tennis-club-info.component';
import { TennisClubTournamentsComponent } from './features/tennis-club/tennis-club-tournaments/tennis-club-tournaments.component';
import { TennisClubReservationsComponent } from './features/tennis-club/tennis-club-reservations/tennis-club-reservations.component';
import { ReservationFormComponent } from './features/reservation/reservation-form/reservation-form.component';
import { ProfileInfoComponent } from './features/profile/profile-info/profile-info.component';
import { ProfileReservationsComponent } from './features/profile/profile-reservations/profile-reservations.component';
import { ProfileMatchesComponent } from './features/profile/profile-matches/profile-matches.component';

@NgModule({
	declarations: [AppComponent, RegisterFormComponent, LoginFormComponent, HomeComponent, TennisClubsComponent, TournamentsComponent, TournamentInfoComponent, TennisClubInfoComponent, TennisClubTournamentsComponent, TennisClubReservationsComponent, ReservationFormComponent, ProfileInfoComponent, ProfileReservationsComponent, ProfileMatchesComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatSelectModule,
		MatNativeDateModule,
		HttpClientModule,
		MatDatepickerModule,
		ToastrModule.forRoot(),
	],
	providers: [DatePipe],
	bootstrap: [AppComponent],
})
export class AppModule {}
