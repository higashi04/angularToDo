import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.updateLoginStatus()
    // this.isLoggedIn = this.authService.isLoggedIn;
    // console.log("navbar bool: " + this.isLoggedIn)
  }
  updateLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    console.log("navbar bool: " + this.isLoggedIn);
  }
  
}