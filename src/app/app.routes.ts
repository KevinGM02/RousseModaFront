import { Routes } from '@angular/router';
import { CatalogoComponent } from './Presentacion/Componentes/catalogo/catalogo.component';
import { DetalleProductoComponent } from './Presentacion/Componentes/detalle-producto/detalle-producto.component';

export const routes: Routes = [
    {
        path: 'catalogo',
        component: CatalogoComponent,
    },
    {
        path: 'DetalleProducto/:id',
        loadComponent: () => import('./Presentacion/Componentes/detalle-producto/detalle-producto.component').then(m => m.DetalleProductoComponent)
    }
];
