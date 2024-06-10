import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatosPrincipalesPageRoutingModule } from './platos-principales-routing.module';

import { PlatosPrincipalesPage } from './platos-principales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatosPrincipalesPageRoutingModule
  ],
  declarations: [PlatosPrincipalesPage]
})
export class PlatosPrincipalesPageModule {}
