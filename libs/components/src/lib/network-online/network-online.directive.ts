import {Directive, OnDestroy, OnInit} from '@angular/core';
import {get} from "lodash-es";
import {fromEvent, Subscription} from "rxjs";

@Directive({
  selector: '[mlNetworkOnline]',
  exportAs: 'mlNetworkOnline'
})
export class NetworkOnlineDirective implements OnInit, OnDestroy {

  private _online: boolean;

  private subscription?: Subscription;

  constructor() {
    this._online = get(window.navigator, 'onLine');
  }

  get online(): boolean {
    // return this._online;
    return get(window.navigator, 'onLine');
  }

  get offline(): boolean {
    return !this.online;
  }

  ngOnInit() {
    fromEvent(window, 'online').subscribe({
      next: value => {
        this._online = true;
      }
    });

    fromEvent(window, 'offline').subscribe({
      next: value => {
        this._online = false;
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
