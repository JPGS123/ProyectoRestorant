import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebestiblesPageRoutingModule } from './bebestibles-routing.module';

import { BebestiblesPage } from './bebestibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebestiblesPageRoutingModule
  ],
  declarations: [BebestiblesPage]
})
export class BebestiblesPageModule {}
