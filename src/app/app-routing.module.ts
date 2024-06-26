import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    {
      path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
    }
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
