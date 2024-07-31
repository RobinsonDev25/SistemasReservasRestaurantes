import { Routes } from '@angular/router';
import { InicioSeccionComponent } from './inicio-seccion/inicio-seccion.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { DetallesRestauranteComponent } from './detalles-restaurante/detalles-restaurante.component';
import { GestionarReservaComponent } from './gestionar-reserva/gestionar-reserva.component';
import { RealizarReservsaComponent } from './realizar-reservsa/realizar-reservsa.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio-seccion', pathMatch: 'full'},
    {path: 'inicio-seccion', component: InicioSeccionComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'home', component: HomeComponent},
    {path: 'detalles', component: DetallesRestauranteComponent},
    {path: 'gestionar', component: GestionarReservaComponent},
    {path: 'reservar', component: RealizarReservsaComponent},
];