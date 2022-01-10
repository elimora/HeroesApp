import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroes } from 'src/app/interfaces/heroes';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any={};
  heroeCasa:string=''  

  constructor(private activatedRoute:ActivatedRoute, 
              private heroServive:HeroesService ) {

    this.activatedRoute.params.subscribe(params=>{ 
    this.heroe=this. heroServive.getHeroe(params['id']); 
    console.log(this.heroe); 
    this.heroeCasa=this.heroe.casa
    console.log(this.heroeCasa)
  })
   
  }



  ngOnInit(): void {
    
  }

 

}
