import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TennisClubNavigatorComponent } from './components/tennis-club-navigator/tennis-club-navigator.component';
import { RouterModule } from '@angular/router';
import { ProfileNavigatorComponent } from './components/profile-navigator/profile-navigator.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { TournamentNavigatorComponent } from './components/tournament-navigator/tournament-navigator.component';

@NgModule({
  declarations: [
    TennisClubNavigatorComponent,
    ProfileNavigatorComponent,
    TournamentNavigatorComponent,
  ],
  exports: [TennisClubNavigatorComponent, ProfileNavigatorComponent, TournamentNavigatorComponent],
  imports: [CommonModule, CommonModule, HttpClientModule, RouterModule, CommonModule, AppRoutingModule, BrowserModule]
})
export class SharedModule {}
