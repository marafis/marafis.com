import { Injectable, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private _scrolled$ = new BehaviorSubject<boolean>(false);
  readonly scrolled$ = this._scrolled$.asObservable();

  constructor(
    private zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    // ✅ SSR SAFE GUARD
    if (!isPlatformBrowser(this.platformId)) return;

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
