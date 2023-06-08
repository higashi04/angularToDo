import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface ListaObject {
  IdUsuario: number;
  IdLista?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  baseUrl: string = "https://localhost:44383/api/Listas/";
  IdUsuario: number = 0;
  listaObject: ListaObject = {
    IdUsuario: this.IdUsuario,
    IdLista: 0
  }
  // listaObject: listaObject;

  constructor(private user: UserService, private http: HttpClient) {
    const currentUser = this.user.getCurrentUser();
    if(currentUser) {
      console.log(currentUser)
      this.IdUsuario = currentUser.idUser;
      console.log(this.IdUsuario)
    }
   }

   fetchData() {
    // Make the HTTP request to fetch data
    this.http.post<any>(`${this.baseUrl}Fetch`, this.IdUsuario)
      .pipe()
  }

   onInsert() {
    this.listaObject.IdUsuario = this.IdUsuario;
      return this.http.post<any>(`${this.baseUrl}Insert`, this.listaObject);
   }

}
