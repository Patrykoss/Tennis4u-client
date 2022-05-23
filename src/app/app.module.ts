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

import { LoginFormComponent } from './features/auth/login-form/login-form.component';
import { HomeComponent } from './features/home/home.component';
import { TennisClubsComponent } from './features/tennis-club/tennis-clubs/tennis-clubs.component';

@NgModule({
	declarations: [AppComponent, RegisterFormComponent, LoginFormComponent, HomeComponent, TennisClubsComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		HttpClientModule,
		ToastrModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
