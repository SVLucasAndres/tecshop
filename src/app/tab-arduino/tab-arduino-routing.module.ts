import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabArduinoPage } from './tab-arduino.page';

const routes: Routes = [
  {
    path: '',
    component: TabArduinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabArduinoPageRoutingModule {}
