import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
})
export class TabHomePage {

  constructor(private router: Router) {}

  redirectToTab1WithTabs() {
    this.router.navigate(['tab1-with-tabs']);
  }
}
