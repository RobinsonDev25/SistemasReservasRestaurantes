import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../servcios/servicios.service';
ServiciosService



@Component({
  selector: 'app-detalles-restaurante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-restaurante.component.html',
  styleUrl: './detalles-restaurante.component.css'
})
export class DetallesRestauranteComponent {

  id:any;

  detalles: any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private serviciosService:ServiciosService){}

  ngOnInit(){
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id);

    /* this.activatedRoute.paramMap.subscribe(params =>{
      this.id =+ params.get('id')!;
      console.log(this.id);
    }) */

    /* this.serviciosService.getDetalles().subscribe(data => {
      this.detalles = data;
      console.log(data);
    }); */
  }



}
