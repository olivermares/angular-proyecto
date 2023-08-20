import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { ActorsI } from 'src/app/models/actors.interfaces';
import { ActorsService } from 'src/app/shared/services/actors.service';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-actors-details',
  templateUrl: './actors-details.component.html',
  styleUrls: ['./actors-details.component.scss']
})
export class ActorsDetailsComponent {
  actorForm!: FormGroup;
  actor= this.actorsService.actorData ;
  newActor = this.actorsService.actorData;
  id!: string | null;
  
  constructor(
  private actorsService: ActorsService,
  private router: Router, 
  private form: FormBuilder,
  private activatedRoute:ActivatedRoute,
  public api: AuthService
  
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
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id= params.get("id")
    })

    this.actorsService.getActor(this.id).subscribe((data: any) =>{
      this.actor={...data}
    })

  }

  update(){
    this.actorsService
    .putActor(this.newActor, this.actor._id)
    .subscribe((data) => {
      console.log(data);
      this.actor = {...this.newActor, _id: this.actor._id }
    });
  }

  drop(){
    this.actorsService.deleteActor(this.actor._id).subscribe((data) => {
      console.log(data)
    })
    this.router.navigate(['/actors']);
  }
}
