import { Route } from '@angular/router';
import { FallbackRouteComponent } from './components/404/not-found.coomponent';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () => import('cart/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('shop/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: "**",
    pathMatch: 'full',
    component: FallbackRouteComponent
  }
];
