import { Router } from '@angular/router';
import { ServiciosService } from './../servcios/servicios.service';
import { Component } from '@angular/core';
Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  datos:any;

  constructor(private serviciosService:ServiciosService,
              private router:Router){}

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

  detalles(id:any){
    this.router.navigateByUrl('/detalles',id)
  }

}
