import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { JiraServiceService } from '../Services/jira-service.service';
import { jiradeveloppers } from '../Models/JiraDeveloppers';
import { JiraTicket } from '../Models/JiraTickets';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


  modalOpen:boolean=false;
  modalOpen1:boolean=false;
  selectedDevsList=[];
  listDev!:jiradeveloppers[];

  TicketAfaire!:JiraTicket[]
  TicketEnCours!:JiraTicket[]
  TicketFini!:JiraTicket[]

  summary: string = '';
  assignemail: string = '';
  constructor(private jiraservice:JiraServiceService){

  }
  ngOnInit(): void {
    this.jiraservice.getTicketJiraAfaire().subscribe(
      response=>{
        this.TicketAfaire=response
      },error=>{
        console.error("errrrrrrror")
      }
    )
    this.jiraservice.getTicketJiraEnCours().subscribe(
      response=>{
        this.TicketEnCours=response
      },error=>{
        console.error("errrrror")
      }
    )
    this.jiraservice.getTicketFini().subscribe(
      response=>{
        this.TicketFini=response
      },error=>{
        console.error("error lors de la recuperation")
      }
    )
    this.jiraservice.getDeveloppersJiraDas().subscribe(
      response=>{
        this.listDev=response
      }
    )
  }
  
 

  /* ----------------------------------------------------------------------------------------------------------------- */

  addDeveloppeurAlerte() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Developpeur has been aaded",
      showConfirmButton: false,
      timer: 1500
    });
    }
    addcomment() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Comment has been added",
        showConfirmButton: false,
        timer: 1500
      });
      }

  closeModal1() {
    document.getElementById("modal-ap1").style.display="none";
    }
  closeModal2() {
      document.getElementById("modal-ap2").style.display="none";
      }

  addDeveloppeur() {
    if(this.modalOpen){
      document.getElementById("modal-ap1").style.display="none";
    }else{
      document.getElementById("modal-ap1").style.display="block";
    }
    this.modalOpen = !this.modalOpen;
    console.log(this.modalOpen1)
  }
  addDev(email: string) {
    this.selectedDevsList.push(email);
    this.assignemail=email;
  }
  
  removeDev(devName: any) {
    let index = this.selectedDevsList.indexOf(devName);
    this.selectedDevsList.splice(index,1);
  }
  addticketjira(){
    if(this.modalOpen){
      document.getElementById("modal-ap").style.display="none";
    }else{
      document.getElementById("modal-ap").style.display="block";
    }
    this.modalOpen = !this.modalOpen;
    console.log(this.modalOpen) 
  }

  addcommentticket(){
    if(this.modalOpen){
      document.getElementById("modal-ap2").style.display="none";
    }else{
      document.getElementById("modal-ap2").style.display="block";
    }
    this.modalOpen = !this.modalOpen;
    console.log(this.modalOpen) 
  }
  closeModal() {
    document.getElementById("modal-ap").style.display="none";
   
  }
  addTicket(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Ticket has been created",
      showConfirmButton: false,
      timer: 1500
    });
  }
  createTicketJira(){
    const projectKey = 'DAS';
    const issueType = 'Tâche';
    if (this.summary && this.assignemail) {
      this.jiraservice.createTicketJira(projectKey, this.summary, issueType, this.assignemail)
        .subscribe(
          response => {
            console.log('Ticket created successfully', response);
          },
          error => {
            console.error('Error creating ticket', error);
          }
        );
    } else {
      console.warn('Summary or Assignee Email is missing');
    }
  }
  
}
