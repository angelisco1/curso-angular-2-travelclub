import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { MiRouterService } from './mi-router.service';

// <a miRouterLink="/">...</a>

@Directive({
  selector: '[appMiRouterLink]'
})
export class MiRouterLinkDirective {
  // @HostBinding('style.color') color = 'blue'
  // @HostBinding('style.cursor') cursor = 'pointer'
  @HostBinding('style') linkStyles = {
    cursor: 'pointer',
    color: 'blue',
    'text-decoration': 'underline'
    // textDecoration: 'underline'
  }
  // @HostBinding('class') clase = 'enlace'

  @Input('appMiRouterLink') path: string | Array<string> = ''

  constructor(private miRouter: MiRouterService) { }

  @HostListener('click') onClick() {
    this.miRouter.navigate(this.path)
  }

}
