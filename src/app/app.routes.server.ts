import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Static pages (safe to prerender)
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'insights',
    renderMode: RenderMode.Prerender
  },
  // Dynamic CMS routes (IMPORTANT: NOT prerender)
  {
    path: 'insights/:category',
    renderMode: RenderMode.Server
  },
  {
    path: 'insights/:category/:slug',
    renderMode: RenderMode.Server
  },
  // fallback
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
