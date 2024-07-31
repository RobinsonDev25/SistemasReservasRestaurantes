import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'http://127.0.0.1:3000/api/restaurantes';

  constructor(private http:HttpClient) { }

  CreateUser(name:any, email:any, password:any){
    return this.http.post('http://127.0.0.1:3000/api/users',{
      name:name,
      email:email,
      password:password
    })
  }

  LoginUser(email:any, password:any){
    return this.http.post('http://127.0.0.1:3000/api/login',{
      email:email,
      password:password
    })
  }

  Reservar(id_usuario:any, id_restaurante:any, fecha_reserva:any, hora_reserva:any, numero_personas:any){
    return this.http.post('http://127.0.0.1:3000/api/reservas',{
      id_usuario:id_usuario,
      id_restaurante:id_restaurante,
      fecha_reserva:fecha_reserva,
      hora_reserva:hora_reserva,
      numero_personas:numero_personas
    })
  }


  getUser(){
    return this.http.get('http://127.0.0.1:3000/api/users')
  }

  ObtenerRestaurante(){
    return this.http.get('http://127.0.0.1:3000/api/restaurantes')
  }

  getReservas(){
    return this.http.get('http://127.0.0.1:3000/api/reservas')
  }

  deleteReserva(id:any){
    return this.http.delete('http://127.0.0.1:3000/api/reservas/'+{id})
  }

 

}