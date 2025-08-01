import { Component } from '@angular/core';

@Component({
  selector: 'app-info-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './info-nosotros.component.html',
  styleUrl: './info-nosotros.component.css'
})
export class InfoNosotrosComponent {
  videLocalNosotos = '/assets/VID_PASARELA.mp4'
  ngAfterViewInit():void{
    const elements = document.querySelectorAll('.animar-slide-up');

    const observer =  new IntersectionObserver(entries =>{
      entries.forEach((entry,index) =>{
        if(entry.isIntersecting){
          const el = entry.target as HTMLElement;
          el.classList.add('visible');
          observer.unobserve(entry.target); // Solo se anima una vez
        }
      });
    }, {threshold: 0.1});
    elements.forEach(el => observer.observe(el));
  }
}
