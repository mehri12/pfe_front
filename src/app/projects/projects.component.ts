import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { JiraProject } from '../Models/JiraProject';
import { JiraServiceService } from '../Services/jira-service.service';
import { Router } from '@angular/router';
import { jiradeveloppers } from '../Models/JiraDeveloppers';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  modalOpen: boolean = false;
  listDev!:jiradeveloppers[];
  selectedDevsList=[];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  projectinfonext:boolean=false;
  projectinfonext1:boolean=false;
  projectinfonext11:boolean=false;
  projectinfonext111:boolean=false;
  branches: string[] = ['Branche1'];
  reposs: string[] = ['Repo1'];
  nouvelleLegende: string = '';
  fieldsetAjoute: boolean = true;

  projects!:JiraProject[];
  constructor(private  _formBuilder:FormBuilder ,public dialog: MatDialog ,
    private renderer: Renderer2, private el: ElementRef,private jiraservice:JiraServiceService,
    private router:Router){
  }


  

    
  
  ngOnInit(): void {
    this.jiraservice.getProjectsJira().subscribe(
      response=>{
        this.projects=response;
        console.log(this.projects)
      },
      error=>{
        console.error("erreur ------")
      }
    )
    this.jiraservice.getDeveloppersJiraDas().subscribe(
      response=>{
        this.listDev=response
      }
    )
  }

  

 
  addDev(devName: string) {
    this.selectedDevsList.push(devName);
  }
  
  removeDev(devName: any) {
    let index = this.selectedDevsList.indexOf(devName);
    this.selectedDevsList.splice(index,1);
  }
  
  addModal() {
    if(this.modalOpen){
      document.getElementById("modal-ap").style.display="none";
    }else{
      document.getElementById("modal-ap").style.display="block";
    }
    this.modalOpen = !this.modalOpen;
    console.log(this.modalOpen) 
  }
  closeModal() {
    document.getElementById("modal-ap").style.display="none";
    document.getElementById("modal-ap-next").style.display="none";
    document.getElementById("modal-ap-next1").style.display="none";
    document.getElementById("modal-ap-next11").style.display="none";
    document.getElementById("modal-ap-next111").style.display="none";
  }
 
  
  
  NextInfoProject() {
    if(this.projectinfonext){
      document.getElementById("modal-ap-next").style.display="none";
    }else{
      document.getElementById("modal-ap-next").style.display="block";
    }
    this.projectinfonext = !this.projectinfonext;
    
  }
  NextInfoProject1() {
    if(this.projectinfonext){
      document.getElementById("modal-ap-next1").style.display="none";
    }else{
      document.getElementById("modal-ap-next1").style.display="block";
    }
    this.projectinfonext = !this.projectinfonext; 
  }

  NextInfoProject11() {
    if(this.projectinfonext){
      document.getElementById("modal-ap-next11").style.display="none";
    }else{
      document.getElementById("modal-ap-next11").style.display="block";
    }
    this.projectinfonext = !this.projectinfonext; 
  }
  NextInfoProject111() {
    if(this.projectinfonext){
      document.getElementById("modal-ap-next111").style.display="none";
    }else{
      document.getElementById("modal-ap-next111").style.display="block";
    }
    this.projectinfonext = !this.projectinfonext; 
  }
  
  ajouterChamp() {
    this.branches.push('');
  }
  ajouterRepo(){
    this.reposs.push('');
  }
  
  ajouterFieldset(form: NgForm) {
    // Création des éléments du fieldset
    const fieldset = this.renderer.createElement('fieldset');
    const legend = this.renderer.createElement('legend');
    const licenceLabel = this.renderer.createElement('label');
    const licenceInput = this.renderer.createElement('input');
    const versionLabel = this.renderer.createElement('label');
    const versionInput = this.renderer.createElement('input');
    const descriptionLabel = this.renderer.createElement('label');
    const descriptionInput = this.renderer.createElement('input');

    // Récupération du nom de la légende depuis le champ de texte
    const nouvelleLegende = this.nouvelleLegende;

    // Attribution du texte de la légende
    legend.textContent = nouvelleLegende || "Nouveau Fieldset";
    licenceLabel.textContent = "Licence:";
    versionLabel.textContent = "Version:";
    descriptionLabel.textContent = "Description:";

    // Ajout des éléments au fieldset
    this.renderer.appendChild(fieldset, legend);
    this.renderer.appendChild(fieldset, licenceLabel);
    this.renderer.appendChild(fieldset, licenceInput);
    this.renderer.appendChild(fieldset, versionLabel);
    this.renderer.appendChild(fieldset, versionInput);
    this.renderer.appendChild(fieldset, descriptionLabel);
    this.renderer.appendChild(fieldset, descriptionInput);

    // Ajout du fieldset au conteneur
    const fieldsetContainer = this.el.nativeElement.querySelector('#fieldset-container');
    this.renderer.appendChild(fieldsetContainer, fieldset);
    this.fieldsetAjoute = true;
    this.nouvelleLegende = JSON.parse(JSON.stringify(this.nouvelleLegende))
    console.log("reset",form)
    form.reset()
   
    }
    addproject(){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your project has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }

}
