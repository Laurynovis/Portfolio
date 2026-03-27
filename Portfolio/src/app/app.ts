import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RadialCarouselComponent } from './components/radial-carousel/radial-carousel';
import { startSnowfall } from '../snow'; // Verifique se o caminho ../snow.ts está correto

@Component({
  selector: 'app-root',
  standalone: true,
  // Mantemos o RadialCarouselComponent aqui para que o Angular o reconheça no app.html
  imports: [RouterOutlet, RadialCarouselComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // Signal para o título, seguindo sua preferência por Signals
  protected readonly title = signal('Portifolio');

  ngOnInit(): void {
    // Inicializa o efeito de neve cinza claro após a renderização inicial
    this.initBackgroundEffect();
  }

  private initBackgroundEffect(): void {
    // O setTimeout garante que o ciclo de detecção do Angular 
    // termine antes de manipularmos o Canvas diretamente
    setTimeout(() => {
      try {
        startSnowfall();
      } catch (error) {
        console.warn('Erro ao inicializar background: ', error);
      }
    }, 0);
  }
}