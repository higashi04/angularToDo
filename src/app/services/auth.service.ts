import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';



export interface UserSignUP  {
  email: string,
  password: string,
  firstName: string,
  lastName: string
}

export interface UserLogIn {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = "https://localhost:44383/api/User/";
  isLoggedIn: boolean = false;


  constructor(private http: HttpClient, private userService: UserService) { }
  

  signUp(userObj: UserSignUP) {
    return this.http.post<any>(`${this.baseURL}register`, userObj);
  }

  login(userObj: UserLogIn){
    return this.http.post<any>(`${this.baseURL}authenticate`,userObj).
    pipe(
      tap((res: any) => {
        this.isLoggedIn = true;
        this.userService.setCurrentUser(res);
      })
    );
  }
}
