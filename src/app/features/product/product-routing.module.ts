import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'list', 
    component: ProductsListComponent
  },
  {
    path: 'details/:id', 
    component: ProductDetailsComponent
  },
  {
    path: 'details', 
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

