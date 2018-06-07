import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductRootComponent } from './product-root.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'productList',
    component: ProductRootComponent,
    children: [
      { path: 'test', component: ProductListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
