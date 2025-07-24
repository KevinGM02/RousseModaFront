import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-politicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent {
  opcionSeleccionada: string = 'terminos';

  cambiarOpcion(opcion: string){
    this.opcionSeleccionada =opcion;
  }
}
