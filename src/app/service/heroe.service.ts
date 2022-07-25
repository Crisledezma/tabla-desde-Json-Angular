import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  url: string = 'http://localhost:3000/heroes';

  constructor( private http:HttpClient ) { }

  getHeroes(){

    return this.http.get(this.url);
  }
}
