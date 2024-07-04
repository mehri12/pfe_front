import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { StatistiqueProjectComponent } from './statistique-project/statistique-project.component';
import { TeamsComponent } from './teams/teams.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DetailsProjectComponent } from './details-project/details-project.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'profil',component:ProfilComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'register',component:RegisterComponent},
  {path:'projects/statistique',component:StatistiqueProjectComponent},
  {path:'team/:projectkey',component:TeamsComponent},
  {path:'details',component:DetailsProjectComponent},
  {path:'tickets',component:TicketsComponent}
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
