import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Product } from '@shopping/shared/api';
import { map } from 'rxjs';
import { SessionProductComponent } from '../../components/session/category.componet';
import { ShopHeroComponent } from '../../components/shop-hero/shop-hero.component';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product-list/product-list.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    SessionProductComponent,
    ShopHeroComponent,
    MatProgressSpinnerModule
  ],
  providers: [
    ProductService,
    CartService,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {

  productService = inject(ProductService);

  productList = this.productService.getProductList();

  productListByCategory = this.productList.pipe(map((products) => this.groupByCategory(products)))

  groupByCategory(products: Product[]) {

    const grouped = products.reduce((acc, product) => {

      const categoryInAccumulator = product.category in acc;

      if (!categoryInAccumulator) {
        acc[product.category] = [];
      }

      acc[product.category].push(product);

      return acc;
    }, {} as { [category: string]: Product[] });

    return Object.keys(grouped).map(category => ({
      category,
      list: grouped[category]
    }))
  }


}
