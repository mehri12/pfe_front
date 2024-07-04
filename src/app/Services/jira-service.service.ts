import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jiradeveloppers } from '../Models/JiraDeveloppers';
import { JiraProject } from '../Models/JiraProject';
import { JiraTicket } from '../Models/JiraTickets';

@Injectable({
  providedIn: 'root'
})
export class JiraServiceService {
  private apiUrl = 'http://localhost:8080/jira';

  constructor(private httpclient:HttpClient) { }


  getDeveloppersJira(projectKey: string):Observable<jiradeveloppers[]>{
    const url = `${this.apiUrl}/projects/${projectKey}/developers`;
    return this.httpclient.get<jiradeveloppers[]>(url);
  }
  getProjectsJira():Observable<JiraProject[]>{
    return this.httpclient.get<JiraProject[]>(this.apiUrl+"/getallprojects")
  }

  getTicketJiraAfaire():Observable<JiraTicket[]>{
    return this.httpclient.get<JiraTicket[]>('http://localhost:8080/jira/tickets/DAS/a-faire');
  }
  getTicketJiraEnCours():Observable<JiraTicket[]>{
    return this.httpclient.get<JiraTicket[]>('http://localhost:8080/jira/tickets/DAS/en-cours')
  }
  getTicketFini():Observable<JiraTicket[]>{
    return this.httpclient.get<JiraTicket[]>('http://localhost:8080/jira/tickets/DAS/fini')
  }
  getDeveloppersJiraDas():Observable<jiradeveloppers[]>{
    return this.httpclient.get<jiradeveloppers[]>('http://localhost:8080/jira/projects/DAS/developers');
  }

  
  createTicketJira(projectkey:string,summary:string,issuetype:string,assignemail:string):Observable<Response>{
    const url = `${this.apiUrl}/createticket`;
    const params = new HttpParams()
      .set('projectKey', projectkey)
      .set('summary', summary)
      .set('issuetype', issuetype)
      .set('assignemail', assignemail);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpclient.post<Response>(url, null, { headers, params });
  }
}
