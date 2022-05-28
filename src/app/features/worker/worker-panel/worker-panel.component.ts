import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';

@Component({
  selector: 'app-worker-panel',
  templateUrl: './worker-panel.component.html',
  styleUrls: ['./worker-panel.component.scss']
})
export class WorkerPanelComponent implements OnInit {

  constructor(
    public authGuard: AuthGuardService
  ) { }

  ngOnInit(): void {
  }

}
