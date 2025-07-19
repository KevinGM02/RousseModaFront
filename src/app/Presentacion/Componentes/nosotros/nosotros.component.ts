import { Component } from '@angular/core';
import { ENLACES } from '../../../config/enlaces.config';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CanalesComponent } from '../canales/canales.component';
@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CanalesComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  idNosotros = ENLACES.idVideoNosotrosYT;
  videLocalNosotos = '/assets/VIDEO_PRUEBA.mp4'
  videoNosotros: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){
    const id = this.idNosotros;
    const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}`;
    this.videoNosotros = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
