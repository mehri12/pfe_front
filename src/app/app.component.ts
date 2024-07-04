import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfe-front';
login: boolean=false;
register:Boolean=false
constructor(router: Router) {
  const url = window.location.pathname;
  console.log(url);
  if (url=="/login" || url=="/register")
  this.login=true;
this.register=true;

}
}
