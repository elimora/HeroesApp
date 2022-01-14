import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private hereosService:HeroesService, 
              private router:Router) { }

  ngOnInit(): void {
   
  }

  buscarHeroe(termino:string){

   let miHeroe =this.hereosService.buscarHeore(termino); 
   console.log(miHeroe); 
   //console.log(termino)

   this.router.navigate(['/search',termino])
   
  }
}
