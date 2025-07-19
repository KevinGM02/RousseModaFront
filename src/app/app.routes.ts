import { Routes } from '@angular/router';
import { CatalogoComponent } from './Presentacion/Componentes/catalogo/catalogo.component';

import { DetalleProductoComponent } from './Presentacion/Componentes/detalle-producto/detalle-producto.component';

import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './Presentacion/Componentes/nosotros/nosotros.component';

export const routes: Routes = [
    {path: 'catalogo',component: CatalogoComponent,},
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
    {
        path: 'DetalleProducto/:id',
        loadComponent: () => import('./Presentacion/Componentes/detalle-producto/detalle-producto.component').then(m => m.DetalleProductoComponent)
    }
  ];

