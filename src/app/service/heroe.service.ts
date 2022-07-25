import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hero } from '../interface/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  url: string = 'http://localhost:3000/heroes';

  constructor( private http:HttpClient ) { }

  getHeroes(){

    return this.http.get<Hero[]>(this.url);
  }
}
