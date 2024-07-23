import { Routes } from '@angular/router';
import { InicioSeccionComponent } from './inicio-seccion/inicio-seccion.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio-seccion', pathMatch: 'full'},
    {path: 'inicio-seccion', component: InicioSeccionComponent},
    {path: 'registro', component: RegistroComponent},
];
