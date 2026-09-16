import { Component, input } from '@angular/core';

type Doodle = 'heart' | 'palette' | 'brush' | 'pin' | 'cloud' | 'sunflower';

@Component({
  selector: 'app-art-doodles',
  host: { 'aria-hidden': 'true' },
  templateUrl: './art-doodles.component.html',
  styleUrl: './art-doodles.component.scss',
})
export class ArtDoodlesComponent {
  readonly motifs = input<readonly Doodle[]>(['heart', 'palette', 'cloud']);
}
