import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from '../../core/services/projeto';
import { Projeto } from '../../core/models/projeto.model';
import { CommonModule } from '@angular/common'; // Importante para o [ngClass]

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule], // Adicione isso aqui!
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projetoService = inject(ProjetoService);

  protected projeto = signal<Projeto | undefined>(undefined);
  
  // 1. Criamos um Signal para controlar a classe CSS de animação
  protected animacaoClass = signal('fadeIn'); 

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); 
      
      if (id) {
        const dados = this.projetoService.getProjetoById(id);
        
        if (dados) {
          // O TRUQUE MÁGICO DO REFLOW:
          // Tiramos a classe e "apagamos" o projeto temporariamente
          this.animacaoClass.set(''); 
          this.projeto.set(undefined); 

          // Esperamos 10 milissegundos (imperceptível ao olho humano)
          // e colocamos tudo de volta. Isso força a animação a rodar do zero!
          setTimeout(() => {
            this.projeto.set(dados);
            this.animacaoClass.set('fadeIn');
          }, 10);

        } else {
          this.router.navigate(['/']); 
        }
      }
    });
  }
  voltar() {
    this.router.navigate(['/']);
  }
}