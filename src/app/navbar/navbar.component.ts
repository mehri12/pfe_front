import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   switchMode : boolean  = false
   cssClass= "light"
darkmode=false
showDropdown = false;
notifications = [
  { message: 'Notification 1' },
  { message: 'Notification 2' },
  { message: 'Notification 3' },
  { message: 'Notification 4' },
  { message: 'Notification 5' }
];


  ngOnInit(): void {
    console.log("--------------",this.cssClass)
    // TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar?.addEventListener('click', function () {
	sidebar?.classList.toggle('hide');
})


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton?.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm?.classList.toggle('show');
		if(searchForm?.classList.contains('show')) {
			searchButtonIcon?.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon?.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar?.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon?.classList.replace('bx-x', 'bx-search');
	searchForm?.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon?.classList.replace('bx-x', 'bx-search');
		searchForm?.classList.remove('show');
	}
})


  
  





  }
  afficher(): void {
    this.showDropdown = !this.showDropdown;
  }
  switchModeDark(){

      console.log("ok")
      if(this.switchMode){
        this.cssClass ="dark"
      }else{
        this.cssClass ="light"
      }
      // this.switchMode.addEventListener('change', function () {
      //     // Utilisez une assertion de type pour spécifier que l'élément est de type HTMLInputElement
      //     // const inputElement = this as HTMLInputElement;
          
      //     if (inputElement.checked) {
      //       console.log("oui")
      //         document.body.classList.add('dark');
      //     } else {
      //         document.body.classList.remove('dark');
      //         console.log("non")
      //     }
    
      // });
    
  }
}
