import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TeamsComponent } from './teams/teams.component';
import { EditProfileComponent } from './editProfile/editProfile.component';
import { AdminComponent } from './admin/admin.component';

import { AuthService } from './providers/auth.service';
import { UserService } from './providers/user.service';
import { TeamsService } from './providers/teams.service';
import { LeaguesService } from './providers/leagues.service';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "teams", component: TeamsComponent},
  {path: "editProfile", component: EditProfileComponent},
  {path: "admin", component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    TeamsComponent,
    AdminComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    UserService,
    TeamsService,
    LeaguesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
