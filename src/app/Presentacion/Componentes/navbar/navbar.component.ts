import { CommonModule } from '@angular/common';
import { Component, inject, signal,computed, effect } from '@angular/core';
import { Router,RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);
  currentUrl = signal(this.router.url);
  rutaEsInicio = true;
  isHovered = false;
  imagenActual = 'assets/logo.png';
  scrollToSeccion(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  changeTo(tipo: 'normal' | 'hover') {
    this.isHovered = tipo === 'hover';

    if(this.isHovered){
      this.imagenActual = this.rutaEsInicio
      ? '/assets/logo_og.png'
      : '/assets/logo_og.png';
    } else{
      this.setImagenPorRuta();
    }
  }
  constructor() 
  { this.router.events 
    .pipe(filter(event => event instanceof NavigationEnd)) 
    .subscribe((event: NavigationEnd) =>
      { this.rutaEsInicio = event.urlAfterRedirects === '/home';
        this.setImagenPorRuta()
      }); 
      this.setImagenPorRuta();
    }
  setImagenPorRuta(){
    const esDesktop = typeof window !== 'undefined' && window.innerWidth > 250;
    if(this.isHovered && esDesktop){
      return;
    }
    this.imagenActual = this.rutaEsInicio
    ? '/assets/logo.png'
    : '/assets/logo_og.png';
  } 

}
