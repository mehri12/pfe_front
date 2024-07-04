import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  listDev=["Mohamed ben Ahmed","Mojtabah","Mahdi Hnana","Karim guesmi","Narjess ayadi","Hlima fel jbal"];
  userinfo:boolean=false;
  useractivity:boolean=false;
  daek!:string;
  
  ngOnInit(): void {
    
  }
  adduserinfo() {
   if(this.userinfo){
    document.getElementById("userinformation").style.display="none";
   }else{
    document.getElementById("userinformation").style.display="block";
   }
   this.userinfo=  !this.userinfo
    }



  adduseractivity() {
      if(this.useractivity){
        document.getElementById("useractivity").style.display="none";
      }else{
        document.getElementById("useractivity").style.display="block";
      }
      this.useractivity=  !this.useractivity
      }


      
       changeRowColor(selectElement) {
        var selectedValue = selectElement.value;
        var row = selectElement.closest('tr');

       
       

        // Ajoutez la classe de couleur appropriée en fonction de la sélection
        row.classList.add(selectedValue);
    }
      
    
    
  
    
      

}




