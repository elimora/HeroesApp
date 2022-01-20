import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() heroes:Heroes[]=[]; 
  @Input() termino:string=""

  constructor(private activateRoute:ActivatedRoute, 
              private heroeService:HeroesService, 
              private router:Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params=>{
      this.heroes=this.heroeService.buscarHeore(params['termino']); 
      this.termino=params['termino']
    })
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
   
  }
}
