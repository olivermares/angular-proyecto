import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  submited: boolean = false;
  errorMessage = ""
  isLoginFailed: boolean = false

  constructor(private form: FormBuilder, private api: AuthService, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.form.group({
      // email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      // password: ["", [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}")]]
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }

  login(){
    
    console.log('Estoy en el login');

    
    this.submited = true;
    if(this.loginForm.valid){
      console.log('Datos del login correctos');
      this.api.login(this.loginForm.value).subscribe((data:any) => {       
        
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        this.isLoginFailed = false
        this.router.navigate(['/']);
      },
      err=> {
        console.log('Login incorrecto: ', err.error.message);         
        this.errorMessage = err.error.message;
        this.isLoginFailed = true

      })
      
  }
  }


}
