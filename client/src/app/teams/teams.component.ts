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
  currTeams: Array<any> = [];

  constructor(
    private authService: AuthService,
    private leaguesService: LeaguesService,
    private teamsService: TeamsService, 
    private router: Router) {}

  ngOnInit() {
    // Check to see if user is Auth to be here
    if(!this.authService.getAuthStatus()) {
      this.router.navigate(['login']);
    }
    
    // Preload all the leagues into DDL
    this.leaguesService.getLeagues().subscribe(data => {
      this.leagues = data;
    });

    this.teamsService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  // On selection of the DDL, populate table with teams
  onSelect(val) {
    this.currTeams = this.teams.filter((t) => {
      return t.League === val;
    });
  }

  // On click, populate table with all teams
  viewAll(): void {
    this.currTeams = this.teams;
  }

  // On click, reset view of teams
  resetBtn(): void {
    this.currTeams = [];
  }
}
