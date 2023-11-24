import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../tab2/menu.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router, private menuService: MenuService, private navCtrl: NavController) {}
  redirectToTab1WithTabs(tabName: string) {
    this.router.navigate(['tab1-with-tabs']);
    this.navCtrl.navigateRoot(tabName);
  }
  redirectToCompras(tabName: string) {
    this.router.navigate(['tabCompra']);
    this.navCtrl.navigateRoot(tabName);
  }
  toLogin(tabName: string){
    this.router.navigate(['tabLogin']);
    this.navCtrl.navigateRoot(tabName);
  }
  toArduino(tabName: string){
    this.router.navigate(['tab-arduino']);
    this.navCtrl.navigateRoot(tabName);
  }
  abrirMenu() {
    this.menuService.toggleMenu();
  }
}


