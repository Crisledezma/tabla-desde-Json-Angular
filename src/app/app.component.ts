import { Component } from '@angular/core';
import { HeroeService } from './service/heroe.service';
import { Hero } from './interface/heroe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Tabla Desde Json';

  heroes: Hero[] = [];

  constructor(
    private heroeService: HeroeService
  ){ 
    this.heroeService.getHeroes()
      .subscribe((resp: any) => {
        console.log(resp);
        this.heroes = resp;
      })

  }

  cardVisible: number | null = null;

  volver() {
    this.cardVisible = null;
  }
  
}
