import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroeEncontrado:Heroes[]=[]; 
  termino:string=""

  constructor(private activateRoute:ActivatedRoute, 
              private heroeService:HeroesService, 
              private router:Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params=>{
      this.heroeEncontrado=this.heroeService.buscarHeore(params['termino']); 
      this.termino=params['termino']
      console.log(this.heroeEncontrado);
      console.log(this.termino)
    })
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
    console.log(idx)
  }
}
