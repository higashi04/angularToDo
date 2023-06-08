import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  type: string = "password";
  isText: boolean = false;
  svg: string = "assets/lock-fill.svg";
  signupForm!: FormGroup;
  errorPassword: string = "";

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  
  togglePassword() {
    this.isText = !this.isText;
    this.isText ? this.svg = "assets/unlock-fill.svg" : this.svg = "assets/lock-fill.svg";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
    this.errorPassword = '';
    if(this.signupForm.value.confirmPassword !== this.signupForm.value.password) {
      this.errorPassword = "Las contraseñas no coinciden."
    } else if(this.signupForm.valid) {

      this.auth.signUp(this.signupForm.value).subscribe({
        next:(response) => {
          console.log(response)
          this.signupForm.reset();
          this.router.navigate(['login'])
        },
        error:(err) => {
          console.error(err)
        }
      })

      console.log(this.signupForm.value)
    } else {
      ValidateForm.validateFormFields(this.signupForm)
    }
  }

  cleanErrorPassword(){
    this.errorPassword = "";
  }

}
