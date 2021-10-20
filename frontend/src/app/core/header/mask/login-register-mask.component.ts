import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { User } from "../../../models/user.model";
import { Observable, Subscription } from "rxjs";
import { animate, style, transition, trigger } from "@angular/animations";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-register-mask',
  templateUrl: './login-register-mask.component.html',
  styleUrls: ['./login-register-mask.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.2s ease-in-out', style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.2s ease-in-out', style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LoginRegisterMaskComponent implements OnInit, OnDestroy {

  faUserCircle = faUserCircle;
  showLogin: boolean = true;
  showMask: boolean = false;
  clickInside: boolean = false;
  user$: Observable<User> = this.store.select(state => state.user);
  userSubscription: Subscription = Subscription.EMPTY;

  constructor(private elementRef: ElementRef, private store: Store<{ user: User }>) { }

  ngOnInit() {
    this.userSubscription = this.user$.subscribe(() => { this.showLogin = true; this.showMask = false; });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  toggleMask(): void {
    this.showMask = !this.showMask;
  }

  toggleRegisterMask(): void {
    this.showLogin = !this.showLogin;
  }

  @HostListener('document:click')
  private generalClickEvent(): void {
    if (!this.clickInside) {
      this.showMask = false;
    }
    this.clickInside = false;
  }

  @HostListener('click')
  private clickInComponent(): void {
    this.clickInside = true;
  }
}
