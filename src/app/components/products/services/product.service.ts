import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //* Obtener todos los productos: 'https://dummyjson.com/products'
  getAllProducts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products').pipe(
      map((products: any) => {
        return  products.products;
      })
    );
  }

  //* Crear un producto: 'https://dummyjson.com/products/add'
  createProduct(body: any): Observable<any> {
    return this.http.post('https://dummyjson.com/products/add', body);
  }
}
