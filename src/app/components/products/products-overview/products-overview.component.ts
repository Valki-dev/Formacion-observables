import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subject, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.css']
})
export class ProductsOverviewComponent implements OnInit {

  //! Subject para cerrar suscripciones
  private _unsubscribe = new Subject<boolean>;
  products: any[] = []
  
  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    //! Intervalo infinito
    // interval().pipe(takeUntil(this._unsubscribe)).subscribe(number => console.log(number));

    this.productService.getAllProducts().pipe(takeUntil(this._unsubscribe)).subscribe(
      (allProducts: any) =>  {
        this.products = allProducts;
        console.log(allProducts);
      }
    )
  }

}
