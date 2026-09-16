import { AfterViewInit, Directive, ElementRef, inject, OnDestroy, Renderer2 } from '@angular/core';

/** Types a heading once on entry while reserving its complete, wrapping layout. */
@Directive({ selector: '[appTypewriter]', standalone: true })
export class TypewriterDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  private observer?: IntersectionObserver;
  private timer?: ReturnType<typeof setTimeout>;
  private output?: HTMLElement;
  private text = '';

  private readonly finish = (): void => {
    clearTimeout(this.timer);
    this.observer?.disconnect();
    if (this.output) this.renderer.setProperty(this.output, 'textContent', this.text);
    this.renderer.removeClass(this.host.nativeElement, 'heading-is-typing');
  };

  private readonly onMotionChange = (): void => {
    if (this.motion.matches) this.finish();
  };

  ngAfterViewInit(): void {
    const heading = this.host.nativeElement;
    const source = heading.querySelector<HTMLElement>('.heading-typewriter__size');
    this.output = heading.querySelector<HTMLElement>('.heading-typewriter__text') ?? undefined;
    if (!source || !this.output) return;
    this.text = source.textContent ?? '';
    this.renderer.setAttribute(heading, 'aria-label', this.text);
    this.renderer.addClass(heading, 'heading-typewriter-ready');
    this.motion.addEventListener('change', this.onMotionChange);
    if (this.motion.matches) { this.finish(); return; }
    this.observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      this.observer?.disconnect();
      this.renderer.addClass(heading, 'heading-is-typing');
      const characters = Array.from(this.text);
      let count = 0;
      const typeNext = () => {
        this.renderer.setProperty(this.output, 'textContent', characters.slice(0, ++count).join(''));
        if (count < characters.length) this.timer = setTimeout(typeNext, 80);
        else this.finish();
      };
      typeNext();
    }, { threshold: 0.4, rootMargin: '-68px 0px 0px 0px' });
    this.observer.observe(heading);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
    this.observer?.disconnect();
    this.motion.removeEventListener('change', this.onMotionChange);
  }
}
