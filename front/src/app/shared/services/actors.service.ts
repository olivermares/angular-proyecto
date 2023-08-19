import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActorsI } from 'src/app/models/actors.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  url: string = 'http://localhost:5000/actors';
  id!: number;
  actor!: ActorsI;

  public actorData: any = {
    id: '',
    name: '',
    image: '',
  };

  constructor(private http: HttpClient) { }

  getActors(){
    return this.http.get(this.url)
  }

  editData(actor: ActorsI) {
    this.actorData = actor;
  }

  postActor(actor: ActorsI){
    return this.http.post(this.url, actor)
  }

  putActor(film: ActorsI, id: number){
    return this.http.put(`${this.url}/${id}`, film)
  }

  deleteActor(id: string){
    return this.http.delete(`${this.url}/${id}`);
  }

  clearActor() {
    this.actorData = {
      id: '',
      name: '',
      image: '',
    };
  }
}
