import { Component } from '@angular/core';
import { ServiciosService } from '../servcios/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  datos:any

  constructor(private serviciosService:ServiciosService,
    private router:Router){}

  register(name:any, email:any, password:any){
    this.serviciosService.CreateUser(name.value, email.value, password.value).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.datos=data.datoss
      },
      error:(e)=>{
        debugger
      }
    })

  }

}
