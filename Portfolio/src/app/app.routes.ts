// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home, title: 'Portfolio | Home' }, // Página inicial com sua bio
  { path: 'projeto/:id', component: ProjectDetail, title: 'Portfolio | Project Detail' }, // Rota dinâmica
  { path: '**', redirectTo: '' } // Redireciona erros para a home
];

