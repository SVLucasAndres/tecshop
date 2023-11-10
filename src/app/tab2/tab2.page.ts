import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router: Router) {}
  redirectToTab1WithTabs() {
    this.router.navigate(['tab1-with-tabs']);
  }
  alertButtons = [{
    text: '¡Me quedo!',
    role: 'cancel',
    handler: () => {
      console.log('Alert canceled');
    },
  },
  {
    text: 'Seguro',
    role: 'confirm',
    handler: () => {
      this.redirectToTab1WithTabs();
    },
  },];
  }


