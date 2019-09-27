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
  }

  onSelect(val) {
    console.log(val);
    this.teamsService.getTeamsByLeagues(val).subscribe(data => {
      this.teams = data;
    });
  }

  viewAll(): void {
    this.teamsService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }
}
