import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  productos = [
    { nombre: 'Zeta Blanco Cuero x7', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Tijera Piedra', precio: 45, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Prints con Mica', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Hindú x5', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Zeta Blanco Cuero x7', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Tijera Piedra', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Prints con Mica', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Hindú x5', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Zeta Blanco Cuero x7', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Tijera Piedra', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Prints con Mica', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    { nombre: 'Hindú x5', precio: 40, imagen: 'https://media.falabella.com/falabellaPE/125197830_01/w=1500,h=1500,fit=pad' },
    // agrega más según necesites
  ];
}
