import { Component, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radial-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radial-carousel.html',
  styleUrl: './radial-carousel.css'
})
export class RadialCarouselComponent {
  // Lista de projetos usando Signal
  protected readonly projects = signal([
    { id: 'p1', title: 'Sistema de Academia', tech: 'Mendix Low-Code', desc: 'Gestão completa de treinos e alunos.' },
    { id: 'p2', title: 'Paciência Spider', tech: 'Swift / iOS', desc: 'Jogo clássico com arquitetura funcional.' },
    { id: 'p3', title: 'E-commerce API', tech: 'C# / .NET', desc: 'Backend robusto com SQL Server.' },
    { id: 'p4', title: 'Dashboard', tech: 'Angular', desc: 'Visualização de dados em tempo real.' }
  ]);

  protected currentIndex = signal(0);

  constructor(private router: Router) {}

  // Navegação do Carrossel
  next() {
    this.currentIndex.update(i => (i + 1) % this.projects().length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.projects().length) % this.projects().length);
  }

  // Navegação de Rota
  verProjeto(id: string) {
    this.router.navigate(['/projeto', id]);
  }
}