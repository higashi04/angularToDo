import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: any;

  constructor(private auth: AuthService, private router: Router, private userService: UserService) {}

  ngOnInit(): void{
    this.currentUser = this.userService.getCurrentUser();
  }
}
