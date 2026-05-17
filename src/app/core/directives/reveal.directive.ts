import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

export type RevealDirection = 'up' | 'left' | 'right';

@Directive({
  selector: '[mrfReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() mrfReveal: RevealDirection = 'up';
  @Input() revealDelay = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;

    // Set initial CSS class
    const cssClass = this.mrfReveal === 'left'
      ? 'reveal-left'
      : this.mrfReveal === 'right'
        ? 'reveal-right'
        : 'reveal';

    this.renderer.addClass(el, cssClass);

    if (this.revealDelay) {
      this.renderer.setStyle(el, 'transition-delay', `${this.revealDelay}s`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'visible');
            this.observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
