import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';

@Component({
  selector: 'app-scroll-reveal',
  standalone: true,
  styles: [`
    /* :host representa a própria tag <app-scroll-reveal> */
    :host {
      display: block; /* Essencial para que o transform funcione */
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      will-change: opacity, transform;
    }

    /* Quando o IntersectionObserver adiciona a classe via Renderer2 */
    :host.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `],
  template: `<ng-content></ng-content>`
})
export class ScrollRevealComponent implements OnInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' na tag pai (:host)
          this.renderer.addClass(this.el.nativeElement, 'visible');
          observer.unobserve(this.el.nativeElement); 
        }
      });
    }, {
      threshold: 0.1 
    });

    observer.observe(this.el.nativeElement);
  }
}