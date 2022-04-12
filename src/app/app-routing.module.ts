import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartModule } from './features/cart/cart.module';

const routes: Routes = [ 

  {
    path: 'login',
    loadChildren: () => import(`./features/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '', 
    loadChildren: () => import(`./features/features.module`).then(m => m.FeaturesModule)
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
