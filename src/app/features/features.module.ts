import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  declarations: [
    FeaturesComponent, 
  ],
  imports: [
    FeaturesRoutingModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class FeaturesModule { }
