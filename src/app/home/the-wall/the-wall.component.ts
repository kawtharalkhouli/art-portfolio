import { TypewriterDirective } from '../typewriter.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-the-wall',
  imports: [TypewriterDirective],
  templateUrl: './the-wall.component.html',
  styleUrl: './the-wall.component.scss'
})
export class TheWallComponent {

}
