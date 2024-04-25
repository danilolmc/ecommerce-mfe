import { Injectable } from '@angular/core';
import { getProductById, getProductList } from '@shopping/shared/api';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductList() {
    return from(getProductList())
  }

  getProductById(id: string) {
    return from(getProductById(id))
  }
}