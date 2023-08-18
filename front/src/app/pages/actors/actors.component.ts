import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActorsI } from 'src/app/models/actors.interfaces';
import { ActorsService } from 'src/app/shared/services/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})

export class ActorsComponent {
  actorsForm!: FormGroup;
  submited: boolean = false;
  actor!: ActorsI;
  actors!: ActorsI[];

  constructor(
    private form: FormBuilder,
    private actorsService: ActorsService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.actorsForm = this.form.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.actorsService.getActors().subscribe((data: any) => {
      this.actors = [...data]
    });

    this.actorsForm.valueChanges.subscribe((data) => {
      this.actor = { ...data };
    });
  }

  selectActor(actor: ActorsI){
    this.actorsService.actorData=actor;
    this.router.navigate(["actors/" + actor._id]);
  }

  addActor() {
    console.log(this.actor)
    this.submited = true;
    if (this.actorsForm.valid) {
      this.submited = false;
      this.actorsService.postActor(this.actor).subscribe((data: any) => {
        window.location.reload();
      });
    }
  }
}
