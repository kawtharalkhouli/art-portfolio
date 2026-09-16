import { TypewriterDirective } from '../typewriter.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sketchbook',
  imports: [TypewriterDirective],
  templateUrl: './sketchbook.component.html',
  styleUrl: './sketchbook.component.scss'
})
export class SketchbookComponent {

}
