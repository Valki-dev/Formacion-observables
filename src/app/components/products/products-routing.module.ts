import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: ProductsOverviewComponent
      },
      {
        path: ':id', component: ProductDetailComponent
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
