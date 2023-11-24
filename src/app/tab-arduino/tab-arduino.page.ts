import { Component, OnInit } from '@angular/core';
import { MenuService } from '../tab-arduino/menu.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-tab-arduino',
  templateUrl: './tab-arduino.page.html',
  styleUrls: ['./tab-arduino.page.scss'],
})
export class TabArduinoPage{

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
