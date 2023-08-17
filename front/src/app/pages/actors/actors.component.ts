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
    private actorsEP: ActorsService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.actorsForm = this.form.group({
      name: ['', Validators.required],
      nickname: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.actorsEP.getActors().subscribe((data: any) => {
      this.actors = [...data]
    });

    this.actorsForm.valueChanges.subscribe((data) => {
      this.actors = { ...data };
    });
  }


  actorAdd() {
    this.submited = true;
    if (this.actorsForm.valid) {
      this.submited = false;
      this.actorsEP.postActors(this.actor).subscribe((data: any) => {
        this.actorsForm.reset(); 
        this.router.navigate(["/actors"])
      });
    }
  }
}
