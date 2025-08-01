import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.css'
})
export class RedesSocialesComponent {
  ngAfterViewInit(): void {
    const elementos = document.querySelectorAll('.animar-slide-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry,index) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          // el.style.animationDelay = `${index * 2}s`; 
          el.classList.add('visible');
          observer.unobserve(entry.target); // Solo se anima una vez
        }
      });
    }, {
      threshold: 0.1
    });

    elementos.forEach(el => observer.observe(el));
  }
}
