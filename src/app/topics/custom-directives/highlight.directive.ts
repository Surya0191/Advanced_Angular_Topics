import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  host: {
    '(click)': 'applyLogic()',
  },
})
export class HighlightDirective {
  private el: ElementRef | undefined;
  @Input() number = 0;
  @Input() divisibleBy = 1;

  constructor(el: ElementRef) {
    this.el = el;
  }

  applyLogic() {
    setTimeout(() => {
      if (this.number % this.divisibleBy === 0) {
        if (this.el) {
          this.el.nativeElement.style.color = 'red';
        }
      } else {
        if (this.el) {
          this.el.nativeElement.style.color = 'goldenrod';
        }
      }
    });
  }
}
