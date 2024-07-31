import { ServiciosService } from './../servcios/servicios.service';
import { Component } from '@angular/core';
import { LOCALE_ID, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestionar-reserva',
  standalone: true,
  imports: [],
  templateUrl: './gestionar-reserva.component.html',
  styleUrl: './gestionar-reserva.component.css'
})
export class GestionarReservaComponent {

  reserva:any;
  res:any;

  constructor(private serviciosService:ServiciosService) { }

  ngOnInit() {
    this.getReservas()
  }

  getReservas(){
    this.serviciosService.getReservas().subscribe({
      next:(data:any)=>{
        console.log(data)
        this.reserva=data
      },
      error:(e)=>{
        debugger
      }
    })
  }

  cancelarReserva(id:any){
    this.serviciosService.deleteReserva(id).subscribe({
      next:(data:any)=>{
        console.log(data)
      },
      error:(e)=>{
        debugger
      }
    })
  }
 
}
