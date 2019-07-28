import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(elem: ElementRef) { 
    elem.nativeElement.style.color= "purple";
  }

}