import {Component} from '@angular/core';
import {faShoppingBasket, faAlignJustify} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faShoppingBasket = faShoppingBasket;
  faAlignJustify = faAlignJustify;
  navbarClosed: boolean = true;

  constructor() { }

  toggleNavbar(): void{
    this.navbarClosed = !this.navbarClosed;
  }

}
