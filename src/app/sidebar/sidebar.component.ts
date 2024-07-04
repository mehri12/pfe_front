import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    const allsidemenu= document.querySelectorAll('#sidebar .side-menu.top li a');
    allsidemenu.forEach(item =>{
      const li = item.parentElement;

      item.addEventListener('click',function(){
        allsidemenu.forEach(i=>{
          i.parentElement?.classList.remove('active');
        })
        li?.classList.add('active');
      })
    
  });
    
   allsidemenu.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hovered');
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('hovered');
    });
});


    


  

 

}
}

