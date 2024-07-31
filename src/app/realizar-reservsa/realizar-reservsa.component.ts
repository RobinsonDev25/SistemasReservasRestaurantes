import { ServiciosService } from './../servcios/servicios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-realizar-reservsa',
  standalone: true,
  imports: [],
  templateUrl: './realizar-reservsa.component.html',
  styleUrl: './realizar-reservsa.component.css'
})
export class RealizarReservsaComponent {

  use:any;
  res:any;
  mgs:any;

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.ObtenerUsers()
    this.ObtenerRestaurante()
  }

  ObtenerUsers(){
    this.serviciosService.getUser().subscribe({
      next:(datos:any)=>{
        this.use=datos
        console.log(datos)
      },error:(err)=>{
        debugger
        console.log('error:',err)
      }
    })
}

ObtenerRestaurante(){
  this.serviciosService.ObtenerRestaurante().subscribe({
    next:(data:any)=>{
      this.res=data
      console.log(data)
    },error:(err)=>{
      debugger
      console.log('error:',err)
    }
  })
}

crearReserva(id_usuario:any, id_restaurante:any, fecha_reserva:any, 
  hora_reserva:any, numero_personas:any){
  this.serviciosService.Reservar(id_usuario, id_restaurante, fecha_reserva, hora_reserva, numero_personas).subscribe({
    next:(data:any)=>{
      console.log(data)
      this.mgs=data.message
    },error:(err)=>{
      debugger
      console.log('error:',err)
    }
  })
}

}

