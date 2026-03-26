// src/app/core/services/projeto.service.ts
import { Injectable } from '@angular/core';
import { Projeto } from '../models/projeto.model'; // Importamos o "Molde" que criamos

@Injectable({
  providedIn: 'root' // Isso diz: "Angular, crie apenas UMA instância disso pro app todo"
})
export class ProjetoService {

  // Simulando o nosso Banco de Dados (Em OutSystems seria uma Entity)
  // Veja que usamos o tipo "Projeto[]" (Uma lista de objetos que seguem o nosso Molde)
  private projetosDb: Projeto[] = [
    { 
      id: 'p1', 
      title: 'Gym Manager', 
      tech: 'Mendix Low-Code', 
      shortDesc: 'Gestão de treinos e alunos.',
      fullDesc: 'Sistema desenvolvido em Mendix para academias, englobando gestão de matrículas, fichas de treino dinâmicas e painel financeiro.'
    },
    { 
      id: 'p2', 
      title: 'Paciência Spider', 
      tech: 'Swift / iOS', 
      shortDesc: 'Jogo clássico de cartas.',
      fullDesc: 'Recriação do Paciência Spider nativo para iOS usando Swift e as melhores práticas de gerenciamento de estado da Apple.'
    },
    { 
      id: 'p3', 
      title: 'Meu Portfólio', 
      tech: 'Angular 18', 
      shortDesc: 'Site pessoal dinâmico.',
      fullDesc: 'Portfólio construído com Angular, utilizando Signals para reatividade e CSS avançado para efeitos como Glassmorphism e Canvas.'
    }
  ];

  // Método 1: Traz todos os registros (Equivalente a um Aggregate sem filtros no OS)
  // Usaremos isso no Carrossel
  getTodosProjetos(): Projeto[] {
    return this.projetosDb;
  }

  // Método 2: Traz apenas UM registro filtrando pelo ID (Equivalente ao GetProjeto(Id) no OS)
  // Usaremos isso na Página de Detalhes
  getProjetoById(id: string): Projeto | undefined {
    return this.projetosDb.find(projeto => projeto.id === id);
  }
  
}