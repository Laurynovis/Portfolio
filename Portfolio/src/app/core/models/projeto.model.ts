// src/app/core/models/projeto.model.ts

export interface Projeto {
  id: string;          // Tipo Text no OutSystems / String no Java
  title: string;
  tech: string;
  shortDesc: string;   // Descrição curta pro carrossel
  fullDesc: string;    // Descrição longa pra página de detalhes
  
  // A interrogação (?) significa que não é obrigatório (Is Mandatory = False no OutSystems)
  imageUrl?: string;   
  githubUrl?: string;  
}