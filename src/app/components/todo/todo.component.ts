import { Component } from '@angular/core';
import { ListasService } from 'src/app/services/listas.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private lista: ListasService){}

  ngOnInit(): void {
    this.lista.fetchData();
  }
  
  onBtnClick() {
    this.lista.onInsert().subscribe({
      next:(response) =>{
        console.log(response)
      }, error: (err) => {
        console.error(err)
      }
    })
    // alert("clicked")
  }
}
