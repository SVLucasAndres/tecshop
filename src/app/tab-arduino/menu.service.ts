import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuAbierto = false;

  constructor(private menuCtrl: MenuController) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.menuCtrl.enable(this.menuAbierto, 'main-menu');
  }
}