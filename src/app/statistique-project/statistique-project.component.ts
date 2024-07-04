import { Component, OnInit } from '@angular/core';
import { JspdfService } from '../Services/jspdf.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-statistique-project',
  templateUrl: './statistique-project.component.html',
  styleUrls: ['./statistique-project.component.css']
})
export class StatistiqueProjectComponent implements OnInit {
    modalOpen:boolean=false;
    modalOpen1:boolean=false;
    title = 'dashboard-pdf';
  ngOnInit(): void {
    
  }
  
  data: any;

    constructor(private pdfService: JspdfService) {
        this.data = {
            labels: ['completed','pending','process'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#55e0a3",
                        "orange",
                        "yellow"
                    ],
                    hoverBackgroundColor: [
                        "#79d1c3",
                        "#f6c667",
                        "#f8f398"
                    ]
                }]    
            };
    }
    downloadPdf() {
        this.pdfService.generatePdfFromHtml('contentToConvert');
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
addTicket(){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Ticket has been created",
          showConfirmButton: false,
          timer: 1500
        });
      }
closeModal2() {
        document.getElementById("modal-ap2").style.display="none";
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
}
