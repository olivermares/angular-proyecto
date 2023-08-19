import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActorsI } from 'src/app/models/actors.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  url: string = 'http://localhost:5000/actors';
  id!: string | undefined;
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

  getActor(id: any){
    return this.http.get(`${this.url}/${id}`)
  }

  editData(actor: ActorsI) {
    this.actorData = actor;
    this.id =actor._id
  }

  postActor(actor: ActorsI){
    return this.http.post(this.url, actor)
  }

  putActor(film: ActorsI, id: any){
    return this.http.put(`${this.url}/${id}`, film)
  }

  deleteActor(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
