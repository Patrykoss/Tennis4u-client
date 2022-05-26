import { NgModule } from '@angular/core';
import { TennisClubNavigatorComponent } from './components/tennis-club-navigator/tennis-club-navigator.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TennisClubNavigatorComponent
  ],
  exports: [TennisClubNavigatorComponent],
  imports: [RouterModule]
})
export class SharedModule {}
