import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

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