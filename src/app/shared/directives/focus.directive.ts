import { Directive, ElementRef, Input, AfterContentChecked } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[focus]'
})
export class FocusDirective implements AfterContentChecked {

  @Input() focus: boolean;
  private element: HTMLElement;
  private hasFocused = false;

  constructor($element: ElementRef) {
    this.element = $element.nativeElement;
  }

  ngAfterContentChecked() {
    this.giveFocus();
  }

  giveFocus() {
    if (this.focus && !this.hasFocused) {
      this.element.focus();
      this.hasFocused = true;
    }
  }

}
