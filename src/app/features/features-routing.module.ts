import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: 'cart',  
    loadChildren: () => import(`./cart/cart.module`).then(m => m.CartModule)
  }, 
  {
    path: 'product',  
    loadChildren: () => import(`./product/product.module`).then(m => m.ProductModule)
  },
   {
    path: '**',
    redirectTo: '/product/list'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
