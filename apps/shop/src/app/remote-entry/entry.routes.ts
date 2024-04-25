import { Route } from '@angular/router';
import { ProductsComponent } from '../pages/products/products.component';
import { ProductOverviewComponent } from '../pages/product-overview/product-overview.component';

export const remoteRoutes: Route[] = [
  { path: '', component: ProductsComponent },
  { path: 'product/:id', loadComponent: () => ProductOverviewComponent },
];
