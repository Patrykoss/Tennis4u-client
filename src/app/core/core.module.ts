import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { HandleErrorsInterceptor } from './interceptors/handle-errors-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JwtTokenInterceptor } from './interceptors/jwt-token-interceptor';

@NgModule({
	declarations: [NavBarComponent],
	imports: [BrowserModule, AppRoutingModule, MatMenuModule, RouterModule, CommonModule, HttpClientModule],
	exports: [NavBarComponent],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HandleErrorsInterceptor,
			multi: true,
		}
	],
})
export class CoreModule {}
