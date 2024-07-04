import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { MatCardModule } from '@angular/material/card';
import { ProjectsComponent } from './projects/projects.component';
import { CheckboxModule } from 'primeng/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { StatistiqueProjectComponent } from './statistique-project/statistique-project.component';
import {ChartModule} from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TeamsComponent } from './teams/teams.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsProjectComponent } from './details-project/details-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    ProfilComponent,
    ProjectsComponent,
    RegisterComponent,
    StatistiqueProjectComponent,
    TeamsComponent,
    TicketsComponent,
    DetailsProjectComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    CheckboxModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    ChartModule,
    CommonModule,
    FieldsetModule,
    MatDatepickerModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
