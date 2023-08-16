import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterI } from 'src/app/models/interfaces.character';
import { CharcatersService } from 'src/app/shared/services/charcaters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characterForm!: FormGroup;
  submited: boolean = false;
  character!: CharacterI;
  characters!: CharacterI[];

  constructor(
    private form: FormBuilder,
    private characterEP: CharcatersService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.characterForm = this.form.group({
      name: ['', Validators.required],
      nickname: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.characterEP.getCharacters().subscribe((data: any) => {
      this.characters = [...data]
    });

    this.characterForm.valueChanges.subscribe((data) => {
      this.character = { ...data };
    });
  }


  characterAdd() {
    this.submited = true;
    if (this.characterForm.valid) {
      this.submited = false;
      this.characterEP.postCharacter(this.character).subscribe((data: any) => {
        this.characterForm.reset(); 
        this.router.navigate(["/characters"])
      });
    }
  }
}
