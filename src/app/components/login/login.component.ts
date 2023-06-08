import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  svg: string = "assets/lock-fill.svg";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private userService: UserService) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  togglePassword() {
    this.isText = !this.isText;
    this.isText ? this.svg = "assets/unlock-fill.svg" : this.svg = "assets/lock-fill.svg";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next:(response) => {
          this.loginForm.reset();
          this.router.navigate(['home'])
          // console.log(response)
           this.userService.setCurrentUser(response);
          // console.log(this.userService.getCurrentUser())
        },
        error:(err) => {
          console.error(err)
        }
      })
    } else {
      ValidateForm.validateFormFields(this.loginForm)
    }
  }

}
