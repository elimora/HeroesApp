import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  
  @Input() heroe:any={}; 
  @Input() idx!:number

  constructor( private heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
    //console.log(this.idx); 
    console.log(this.heroe.idx)
  }


  verHeroe(){
    this.router.navigate(['/heroe',this.heroe.idx])
  }
}
