import { ServiciosService } from './../servcios/servicios.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  datos:any;

  constructor(private serviciosService:ServiciosService){}

  ngOnInit() {
    this.getRestaurantes()
  }

  getRestaurantes(){
      this.serviciosService.ObtenerRestaurante().subscribe({
          next:(data:any)=>{
            console.log(data)
            this.datos=data
          },
          error:(e)=>{
            debugger
          }
        })
  }

}
