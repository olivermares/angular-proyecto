import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CharacterI } from 'src/app/models/interfaces.character';

@Injectable({
  providedIn: 'root'
})
export class CharcatersService {
  url: string = 'http://localhost:5000/character';
  id!: number;
  character!: CharacterI;

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(this.url)
  }

  getharacterById(id: number){
    return this.http.get(`${this.url}/${id}`);
  }

  postCharacter(film: CharacterI){
    return this.http.post(this.url, film)
  }
}
