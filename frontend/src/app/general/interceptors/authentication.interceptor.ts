import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import { User } from "../../models/user.model";
import { first, mergeMap } from "rxjs/operators";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private store: Store<{ user: User }>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(state => state.user).pipe(
      first(),
      mergeMap(user => {
        if (user && user.username.length > 0 && user.password?.length !== 0) {
          const authenticatedRequest = request.clone({
            setHeaders: { Authorization: `${user.username}-${user.password}` }
          });
          authenticatedRequest.headers.set('Authorization', `${user.username}-${user.password}`);
          return next.handle(authenticatedRequest);
        }
        return next.handle(request);
      })
    );
  }
}
