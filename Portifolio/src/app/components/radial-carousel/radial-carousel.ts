// src/app/components/radial-carousel/radial-carousel.component.ts
import { Component, signal, input } from '@angular/core'; // Adicione o 'input'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Projeto } from '../../core/models/projeto.model'; // Importe a interface

@Component({
  selector: 'app-radial-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radial-carousel.html',
  styleUrl: './radial-carousel.css'
})
export class RadialCarouselComponent {
  
  // Isso substitui o @Input(). Diz que o componente RECEBE uma lista de projetos.
  // O .required obriga quem usar o carrossel a passar essa lista, senão dá erro.
  public projetos = input.required<Projeto[]>();

  protected currentIndex = signal(0);

  constructor(private router: Router) {}

  next() {
    // Como 'projetos' agora é um signal de input, chamamos com parênteses: this.projetos()
    this.currentIndex.update(i => (i + 1) % this.projetos().length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.projetos().length) % this.projetos().length);
  }

  verProjeto(id: string) {
    this.router.navigate(['/projeto', id]);
  }
}