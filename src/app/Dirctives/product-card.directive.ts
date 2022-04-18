import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCardDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.border="2px solid red";
    elem.nativeElement.style.boxShadow="5px 10px 20px 5px red"
  }

  @HostListener("mouseover") onmoushovereven(){
    this.elem.nativeElement.style.boxShadow="20px 30px 40px 10px blue"
  }
  @HostListener("mouseout") onmousouteven(){
    this.elem.nativeElement.style.boxShadow="5px 10px 20px 5px red"
  }


}
