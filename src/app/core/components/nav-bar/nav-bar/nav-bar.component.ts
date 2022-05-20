import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public authGurad: AuthGuardService) { }

  ngOnInit(): void {
  }

}
