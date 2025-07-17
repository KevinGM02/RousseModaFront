import { Routes } from '@angular/router';
import { CatalogoComponent } from './Presentacion/Componentes/catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './Presentacion/Componentes/nosotros/nosotros.component';

export const routes: Routes = [
    {path: 'catalogo',component: CatalogoComponent,},
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
  ];
