import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../tab2/menu.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
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
  abrirMenu() {
    this.menuService.toggleMenu();
  }
}
