import { Injectable } from '@angular/core';
import { Product } from "../../models/product.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/products.json');
  }
}
