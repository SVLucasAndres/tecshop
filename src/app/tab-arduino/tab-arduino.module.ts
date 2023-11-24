import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabArduinoPageRoutingModule } from './tab-arduino-routing.module';

import { TabArduinoPage } from './tab-arduino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabArduinoPageRoutingModule
  ],
  declarations: [TabArduinoPage]
})
export class TabArduinoPageModule {}
