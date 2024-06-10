import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BajativosPage } from './bajativos.page';

const routes: Routes = [
  {
    path: '',
    component: BajativosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BajativosPageRoutingModule {}
