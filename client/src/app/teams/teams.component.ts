import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';
import { TeamsService } from './../providers/teams.service';
import { LeaguesService } from './../providers/leagues.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  leagues: Array<any> = [];
  teams: Array<any> = [];
  leaguesByTeams: Array<any> = [];
  selected;

  constructor(
    private authService: AuthService,
    private leaguesService: LeaguesService,
    private teamsService: TeamsService, 
    private router: Router) {}

  ngOnInit() {
    if(!this.authService.getAuthStatus()) {
      this.router.navigate(['login']);
    }
    
    this.leaguesService.getLeagues().subscribe(data => {
      this.leagues = data;
    });

    this.teamsService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  onSelect() {
    console.log(this.selected);
  }

  viewAll(): void {
    console.log(this.leagues);
  }
}
