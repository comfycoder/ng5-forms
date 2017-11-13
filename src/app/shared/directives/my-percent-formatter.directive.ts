import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

import { MyPercentPipe } from '../pipes/my-percent.pipe';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myPercentFormatter]'
})
export class MyPercentFormatterDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private percentPipe: MyPercentPipe
  ) { }

  ngOnInit() {
    this.el = this.elementRef.nativeElement;

    this.el.value = this.percentPipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.percentPipe.parse(value); // opposite of transform
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.value = this.percentPipe.transform(value);
  }
}
