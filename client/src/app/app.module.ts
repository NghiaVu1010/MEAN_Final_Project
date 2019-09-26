import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { UserComponent } from './user/user.component';

//import { AuthService } from './providers/auth.service';
//import { UsersService } from './providers/users.service';

const appRoutes: Routes = [
  //{path: '', component: LoginComponent},
  //{path: 'users', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
