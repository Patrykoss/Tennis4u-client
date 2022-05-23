import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './features/auth/login-form/login-form.component';
import { RegisterFormComponent } from './features/auth/register-form/register-form.component';
import { HomeComponent } from './features/home/home.component';
import { TennisClubsComponent } from './features/tennis-club/tennis-clubs/tennis-clubs.component';
import { TournamentsComponent } from './features/tournament/tournaments/tournaments.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '', component: HomeComponent},
	{ path: 'register', component: RegisterFormComponent },
	{ path: 'login', component: LoginFormComponent },
	{ path: 'tennisClubs', component: TennisClubsComponent},
	{ path: 'tournaments', component: TournamentsComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
