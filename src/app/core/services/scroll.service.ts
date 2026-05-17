import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private _scrolled$ = new BehaviorSubject<boolean>(false);
  readonly scrolled$ = this._scrolled$.asObservable();

  constructor(private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(
          debounceTime(10),
          map(() => window.scrollY > 60),
          startWith(false)
        )
        .subscribe((scrolled) => {
          this.zone.run(() => this._scrolled$.next(scrolled));
        });
    });
  }
}
