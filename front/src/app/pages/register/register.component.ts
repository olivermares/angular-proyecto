import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  submited: boolean = false;

  constructor(private form: FormBuilder, private api: AuthService, private router: Router){}

  ngOnInit(): void {
    this.registerForm = this.form.group({
      email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ["", [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}")]]
    })
    }


  registrar(){

    console.log('Estoy en registrar');
    console.log('Datos valido = ', this.registerForm.valid);
    console.log('Datos registro = ', this.registerForm.value);
    
    

    this.submited = true;
    if(this.registerForm.valid){
      this.api.register(this.registerForm.value).subscribe((data) => {
        console.log('Registro correcto');
        console.log(data);
        this.router.navigate(['/']);
      })   
    }
  }

}