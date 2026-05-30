import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Marafis: AI Consulting, Solution Architecture & Cloud Transformation',
  },
  {
    path: 'insights',
    loadComponent: () =>
      import('@pages/blog/blog-index.component').then(m => m.BlogIndexComponent),
      title: 'Insights: Blog AI, Solution Architecture & Cloud Transformation',
  },
  {
    path: 'insights/:category',
    loadComponent: () =>
      import('@pages/blog/blog-index.component').then(m => m.BlogIndexComponent),
  },
  {
    path: 'insights/:category/:slug',
    loadComponent: () =>
      import('@pages/blog/common/article-details/article-details').then(m => m.ArticleDetails),
    // Title set dynamically via Angular Title service inside the component
  },
  {
    path: '**',
    redirectTo: '',
  },
];
