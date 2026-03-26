import { Component, OnInit, inject, signal } from '@angular/core';
import { ProjetoService } from '../../core/services/projeto';
import { Experiencia } from '../../core/models/experiencia.model';
import { CommonModule } from '@angular/common';
import { ScrollRevealComponent } from '../../directives/scroll-reveal'; // IMPORTA

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, ScrollRevealComponent],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class TimelineComponent implements OnInit {
  private projetoService = inject(ProjetoService);
  
  // Signal para renderizar a lista
  protected trajetoria = signal<Experiencia[]>([]);

  ngOnInit() {
    // Busca os dados do Service que você já tem
    const dados = this.projetoService.getTrajetoria();
    this.trajetoria.set(dados);
  }
}