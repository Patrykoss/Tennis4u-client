import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatchService } from '../../match/match.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent implements OnInit {
  public matchForm: FormGroup;
  match: any | undefined;
  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _location: Location,
    private readonly _matchService: MatchService,
    private readonly _router: Router,
    private readonly _toastr: ToastrService
  ) {
    this.matchForm = new FormGroup({
      matchResult: new FormControl('',[Validators.required]),
      players: new FormControl('',[Validators.required])
    })
   }

  ngOnInit(): void {
    this._route.data.subscribe((data:any) => { 
      this.match = data.matchInfo
    });
  }

  goBack(): void {
    this._location.back();
  }

  send(): void {
    const matchResult = {
      IdWinner: this.matchForm.controls['players'].value,
      Result: this.matchForm.controls['matchResult'].value,
      IdMatch: this.match.idMatch
    };
    console.log(matchResult);
    this._matchService.updateResult(matchResult).subscribe((res)=>{
      if(res.status == 204){
        this._toastr.success('', 'Wpisano wynik', {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
          });
      }else{
        this._toastr.error('', res.body, {
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
      }
      this._location.back();
    });
  }



}
