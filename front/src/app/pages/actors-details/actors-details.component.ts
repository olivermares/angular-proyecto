import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActorsI } from 'src/app/models/actors.interfaces';
import { ActorsService } from 'src/app/shared/services/actors.service';

@Component({
  selector: 'app-actors-details',
  templateUrl: './actors-details.component.html',
  styleUrls: ['./actors-details.component.scss']
})
export class ActorsDetailsComponent {
  actorForm!: FormGroup;
  actor= this.actorsService.actorData;
  actorAux!: ActorsI;

  constructor(
  private actorsService: ActorsService,
  private router: Router, 
  private form: FormBuilder,
  ){}

  ngOnInit(): void {
    this.actorForm = this.form.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      biografy: [''],
      country: [''],
    })

  }

  update(){
    console.log(this.actor)
  }

  drop(){
    this.actorsService.deleteActor(this.actor._id)
  }
}
