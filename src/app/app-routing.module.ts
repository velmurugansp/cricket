import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'sign-up',
    loadChildren: './signup/signup.module#SignupPageModule'
  },
  {
    path: 'viewers',
    loadChildren: './viewers/viewers.module#ViewersPageModule'
  },
  {
    path: 'teams',
    loadChildren: './teams/teams.module#TeamsPageModule'
  },
  {
    path: 'players/:team_id',
    loadChildren: './players/players.module#PlayersPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
