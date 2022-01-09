import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroes[]=[]; 
  
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.heroes= this.heroesService.getHeroes()
   
    console.log(this.heroes)
   
  }

}
