import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  svg: string = "assets/eye-fill.svg";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  togglePassword() {
    this.isText = !this.isText;
    this.isText ? this.svg = "assets/eye-slash-fill.svg" : this.svg = "assets/eye-fill.svg";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
