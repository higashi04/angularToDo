import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  type: string = "password";
  isText: boolean = false;
  svg: string = "assets/eye-fill.svg";

  constructor() {}
  ngOnInit(): void {}
  
  togglePassword() {
    this.isText = !this.isText;
    this.isText ? this.svg = "assets/eye-slash-fill.svg" : this.svg = "assets/eye-fill.svg";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
