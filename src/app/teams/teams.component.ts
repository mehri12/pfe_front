import { Component, OnInit } from '@angular/core';
import { JiraServiceService } from '../Services/jira-service.service';
import { jiradeveloppers } from '../Models/JiraDeveloppers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  Developpers:jiradeveloppers[]=[]
  projectkey!:string;

  constructor(private jiraservice:JiraServiceService,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.projectkey = this.route.snapshot.paramMap.get('projectkey');
    this.loadDevelopers();
  }
  loadDevelopers(): void {
    this.jiraservice.getDeveloppersJira(this.projectkey).subscribe(
      (data: jiradeveloppers[]) => {
        this.Developpers = data;
      },
      (error) => {
        console.error('Error fetching developers', error);
      }
    );
  }
 
}
