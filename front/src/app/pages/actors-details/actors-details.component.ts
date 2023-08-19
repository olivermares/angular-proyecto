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
  newActor = this.actorsService.actorData;
  actorAux!: ActorsI;

  constructor(
  private actorsService: ActorsService,
  private router: Router, 
  private form: FormBuilder,
  ){}

  ngOnInit(): void {
    this.actorForm = this.form.group({
      name: [this.newActor.name, Validators.required],
      image: [this.newActor.image, Validators.required],
      biografy: [this.newActor.biografy],
      country: [this.newActor.country],
    })
    this.actorForm.valueChanges.subscribe((changes: any) => {
      this.newActor = changes;
    });

  }

  update(){
    this.actorsService
    .putActor(this.newActor, this.actor._id)
    .subscribe((data) => {
      console.log(data);
    });
  }

  drop(){
    this.actorsService.deleteActor(this.actor._id).subscribe((data) => {
      console.log(data)
    })
    this.router.navigate(['/actors']);
  }
}
