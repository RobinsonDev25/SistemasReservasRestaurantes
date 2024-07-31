import { Component } from '@angular/core';
import { ServiciosService } from '../servcios/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-seccion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-seccion.component.html',
  styleUrl: './inicio-seccion.component.css'
})
export class InicioSeccionComponent {


  datos:any;

  constructor(private serviciosService:ServiciosService,
    private router:Router){}

  login(email:any, password:any){
    this.serviciosService.LoginUser(email.value, password.value).subscribe({
      next:(data:any)=>{
        console.log(data)
        this.datos=data.datoss
        this.router.navigateByUrl('/home')
      },
      error:(e)=>{
        debugger
      }
    })
  }

}
