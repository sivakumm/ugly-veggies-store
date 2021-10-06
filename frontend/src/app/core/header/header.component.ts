import { Component } from '@angular/core';
import { faShoppingBasket, faAlignJustify, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faShoppingBasket = faShoppingBasket;
  faAlignJustify = faAlignJustify;
  faUserCircle = faUserCircle;
  navbarClosed: boolean = true;
  showMask: boolean = false;
  showLogin: boolean = true;

  constructor() { }

  toggleNavbar(): void{
    this.navbarClosed = !this.navbarClosed;
  }

  toggleMask(): void {
    this.showMask = !this.showMask;
  }

  toggleRegisterMask(): void {
    this.showLogin = !this.showLogin;
  }
}
