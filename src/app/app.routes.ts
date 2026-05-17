import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Marafis — Technology Consultancy',
  },
  {
    // Wildcard — redirect back to home
    path: '**',
    redirectTo: '',
  },
];
