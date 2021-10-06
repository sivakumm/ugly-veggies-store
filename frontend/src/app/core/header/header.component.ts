import { Component, OnDestroy, OnInit } from '@angular/core';
import { faShoppingBasket, faAlignJustify, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from "@ngrx/store";
import { User } from "../../models/user.model";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  faShoppingBasket = faShoppingBasket;
  faAlignJustify = faAlignJustify;
  faUserCircle = faUserCircle;
  navbarClosed: boolean = true;
  showMask: boolean = false;
  showLogin: boolean = true;
  user$: Observable<User> = this.store.select(state => state.user);
  userSubscription: Subscription = Subscription.EMPTY;

  constructor(private store: Store<{ user: User }>) { }

  ngOnInit() {
    this.userSubscription = this.user$.subscribe(() => { this.showMask = false; this.showLogin = true; });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

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
