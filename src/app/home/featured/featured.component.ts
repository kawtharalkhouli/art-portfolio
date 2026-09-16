import { TypewriterDirective } from '../typewriter.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  imports: [TypewriterDirective],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {

}
