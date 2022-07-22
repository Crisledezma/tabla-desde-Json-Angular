import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  url = 'http://localhost:3000/heroes';

  constructor(
    private http:HttpClient
  ) { }

  getHeroes() {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this.url, {
      headers: header
    });
  }
}
