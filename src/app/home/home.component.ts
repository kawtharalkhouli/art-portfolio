import { Component, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';

interface GalleryItems {
  id: number;
  src: string;
  name: string;
  tag: string[];
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('gallerySection') gallerySection!: ElementRef<HTMLElement>;
  @ViewChild('contactSection') contactSection!: ElementRef<HTMLElement>;
  @ViewChild('galleryGrid') galleryGrid!: ElementRef<HTMLElement>;
  private _resizeObserver!: ResizeObserver;
  galleryColumns: WritableSignal<number> = signal<number>(5);

  // Gallery Items
  galleryItems: WritableSignal<GalleryItems[]> = signal<GalleryItems[]>([
    {
      id: 1,
      src: 'images/spring-time-scribbles.jpg',
      name: 'Pinterest Inspired Doodles 🌼🫐',
      tag: ['Doodles', 'Sketches'],
    },
    {
      id: 2,
      src: 'images/cherry-blossoms.jpg',
      name: 'Cherry Blossoms 🌸🩷',
      tag: ['Florals', 'Sketches'],
    },
    {
      id: 3,
      src: 'images/cute-doodles-13.jpg',
      name: 'Pinterest Inspired Doodles 🌙🍒🌥',
      tag: ['Doodles'],
    },
    {
      id: 4,
      src: 'images/doodles.jpg',
      name: 'Cute Doodles 🌼🐝🍯🌞💛🌼',
      tag: ['Doodles'],
    },
    {
      id: 5,
      src: 'images/cute-doodles.jpg',
      name: 'Cute Doodles 🍯✨💛🐝✨🍯',
      tag: ['Doodles'],
    },
    {
      id: 6,
      src: 'images/pink-doodles.jpg',
      name: 'Pink Doodles 💖🌸💗🧸🩷🌷💖',
      tag: ['Doodles'],
    },
    {
      id: 7,
      src: 'images/bunny-hearts-and-pumpkin-smiles.jpg',
      name: 'Pinterest Inspired Doodles 🍑🧡🍊🌼☀️✨',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 8,
      src: 'images/heart-floral-wreath.jpg',
      name: 'Heart Floral Wreath 🌸🌼🌈🌙💫',
      tag: ['Watercolor', 'Florals', 'Aesthetic'],
    },
    
    {
      id: 9,
      src: 'images/pink-floral-artwork.jpg',
      name: 'Pink Floral Artwork 🌸🌼🌷🌺',
      tag: ['Florals'],
    },
    
    {
      id: 10,
      src: 'images/spring-in-pastel-blooms.jpg',
      name: 'Spring Coded Artwork 💗✨🩷💖✨💗',
      tag: ['Florals', 'Aesthetic'],
    },
    
    {
      id: 11,
      src: 'images/walle_artwork.jpg',
      name: 'WALL-E Artwork 🖤✨🧸',
      tag: ['Doodles'],
    },
    {
      id: 12,
      src: 'images/lilies-sketch.jpg',
      name: 'Lilies Sketch 🌺🩷',
      tag: ['Sketches', 'Florals'],
    },
    {
      id: 13,
      src: 'images/whimsical-doodles.jpg',
      name: 'Pinterest Inspired Doodles 🐥🍩🍒🎀',
      tag: ['Sketches', 'Doodles'],
    },
    {
      id: 14,
      src: 'images/cute-bunny.jpg',
      name: 'Cute Bunny Doodles 🥺🥰🫶🧸🐻🐰',
      tag: ['Sketches', 'Doodles', 'Kawaii'],
    },
    {
      id: 15,
      src: 'images/lilies.jpg',
      name: 'Lilies 🌸🌷🌼✨💫',
      tag: ['Sketches', 'Florals'],
    },
    {
      id: 16,
      src: 'images/acrylic-paint.jpg',
      name: 'Small Acrylic Sketch 💗✨🩷💖✨💗',
      tag: ['Acrylic Paint', 'Florals'],
    },
    {
      id: 17,
      src: 'images/palestine-sketch.jpg',
      name: 'Palestine Sketch 🖤🤍💚❤️🕊🌿🌿🫒🌾✨',
      tag: ['Sketches'],
    },
    {
      id: 18,
      src: 'images/sunflower-bookmark-02.jpg',
      name: 'Sunflower Bookmark 🌻🧡✨🌞🌿🌻',
      tag: ['Sketches', 'Bookmarks', 'Florals'],
    },
    {
      id: 19,
      src: 'images/doodles-02.jpg',
      name: 'Pink Doodles 💕🎀🌷🤍✨💖',
      tag: ['Doodles'],
    },
    {
      id: 20,
      src: 'images/cute-doodles-03.jpg',
      name: 'Cute Pinterest Inspired Doodles 🦋🍓🌸✨🫧🦋',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 21,
      src: 'images/cute-doodles-04.jpg',
      name: 'Cute Bunny and Teddy Bear Doodles 🫐🐰🧸✨🤍💙',
      tag: ['Sketches', 'Doodles', 'Kawaii'],
    },
    {
      id: 22,
      src: 'images/cute-doodles-05.jpg',
      name: 'Pinterest Inspired Sketch 🦋✨🌸🫧🤍',
      tag: ['Sketches', 'Florals', 'Aesthetic'],
    },
    {
      id: 23,
      src: 'images/cute-doodles-06.jpg',
      name: 'Cute Doodles 🧸🤎✨🤍🌸',
      tag: ['Sketches', 'Doodles', 'Kawaii'],
    },
    {
      id: 24,
      src: 'images/cute-doodles-08.jpg',
      name: 'Kawaii Character Doodles 🍓💞🦋🌸✨🍓',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 25,
      src: 'images/cute-doodles-09.jpg',
      name: 'Cute Polaroid Art 🫐🍰🫧🤍💙',
      tag: ['Polaroids', 'Kawaii'],
    },
    {
      id: 26,
      src: 'images/cute-doodles-10.jpg',
      name: 'Character Doodles 💕🎀🌷🤍✨💖',
      tag: ['Doodles'],
    },
    {
      id: 27,
      src: 'images/cute-doodles-11.jpg',
      name: 'Florals Sketch 💗✨🩷🎀✨💗',
      tag: ['Sketches', 'Florals', 'Aesthetic'],
    },
    {
      id: 28,
      src: 'images/cute-doodles-12.jpg',
      name: 'Pinterest Inspired Doodles 🍓🦋🌸🌺🌷💕✨🍰🍯🌿',
      tag: ['Doodles'],
    },
    
    {
      id: 29,
      src: 'images/cute-doodles-14.jpg',
      name: 'Cherry Doodles 🌸🍒✨🌷🫧',
      tag: ['Doodles', 'Sketches'],
    },
    {
      id: 30,
      src: 'images/cherry-blossom.jpg',
      name: 'Cherry Blossoms ❤️🍒✨🌸💗🍒',
      tag: ['Doodles', 'Florals'],
    },
    {
      id: 31,
      src: 'images/pinterest-inspired.jpg',
      name: 'Pinterest Inspired Doodles 🫐🍰💜🫧🌸',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 32,
      src: 'images/cherry-doodles.jpg',
      name: 'Cherry Doodle ❤️🍒🌺✨💗',
      tag: ['Doodles'],
    },
    {
      id: 33,
      src: 'images/taylor-swift-folklore-sketch.jpg',
      name: 'Taylor Swift Aesthetic Sketch 🤍🩶🕊️✨',
      tag: ['Sketches', 'Aesthetic'],
    },
    {
      id: 34,
      src: 'images/floral.jpg',
      name: 'Cute Floral Artwork 🌺🌻🌸🌷💐✨🍃🌿🌼',
      tag: ['Florals'],
    },
    {
      id: 35,
      src: 'images/kawaii-doodles-04.jpg',
      name: 'Kawaii Doodle 🌷🍒🫧💗🌸',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 36,
      src: 'images/all-pink-doodles.jpg',
      name: 'Pink Artwork 🌸🍒🌷💕✨🫧🤍🌿',
      tag: ['Doodles'],
    },
    {
      id: 37,
      src: 'images/kawaii-doodles-05.jpg',
      name: 'Kawaii Doodle 🐰🤍🌸🫧💕🌷🧁',
      tag: ['Doodles', 'Kawaii'],
    },
    
    {
      id: 38,
      src: 'images/baymax-doodles.jpg',
      name: 'Baymax Doodle 🧸🤎✨🤍🌸',
      tag: ['Doodles'],
    },
    {
      id: 39,
      src: 'images/kawaii-doodles-06.jpg',
      name: 'Kawaii Doodle 🐰🌷🤍🫧🌙',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 40,
      src: 'images/3d-sunflower.jpg',
      name: '3D Sunflower Sketch 🌻✨💛☀️✨🌻',
      tag: ['Sketches', 'Florals'],
    },

    {
      id: 41,
      src: 'images/cute-sketch.jpg',
      name: 'Cute Sketch 💖✨🌺🩷💗✨💘',
      tag: ['Sketches', 'Doodles', 'Kawaii'],
    },
    {
      id: 42,
      src: 'images/kawaii-doodles-07.jpg',
      name: 'Kawaii Doodle 💕🎀🌷🤍✨💖',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 43,
      src: 'images/lilies-sketch-2.jpg',
      name: 'Lilies Sketch 🌿🌸🍃🌷✨',
      tag: ['Florals', 'Sketches', 'Aesthetic'],
    },
    {
      id: 44,
      src: 'images/mandala.jpg',
      name: 'Mandala Artwork 🍃🌿🌼🫧🌸',
      tag: ['Mandala'],
    },
    
    {
      id: 45,
      src: 'images/lilies sketch.jpg',
      name: 'Lilies Sketch 🌻🤍🌿🌷✨',
      tag: ['Florals', 'Sketches', 'Aesthetic'],
    },
    {
      id: 46,
      src: 'images/snoopy-harry-potter.jpg',
      name: 'Snoopy Wearing Harry Potter Uniform Doodle 🧸🤍✨☁️',
      tag: ['Doodles'],
    },
    {
      id: 47,
      src: 'images/kawaii-doodles-02.jpg',
      name: 'Kawaii Doodle 🧸🤎✨🫐✨💙🫐',
      tag: ['Doodles' ,'Kawaii'],
    },
    {
      id: 48,
      src: 'images/watercolor-floral.jpg',
      name: 'Watercolor Floral Artwork 🌺🌼💐✨🍃🌸',
      tag: ['Watercolor', 'Florals', 'Aesthetic'],
    },
    {
      id: 49,
      src: 'images/kawaii-doodles-01.jpg',
      name: 'Kawaii Doodle 🫐🐰🧸💙🤍💜🌸',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 50,
      src: 'images/pinterest-inspired-sketch.jpg',
      name: 'Pinterest Inspired Sketch 🐰🫐🧸🌸🫧✨',
      tag: ['Sketches', 'Doodles'],
    },
    {
      id: 451,
      src: 'images/kawaii-doodles-03.jpg',
      name: 'Kawaii Doodles 🫐💜✨🌙🌿🌸🍰',
      tag: ['Doodles', 'Kawaii'],
    },
  ]);

  ngAfterViewInit(): void {
    this._reseize();
  }

  private _reseize(): void {
    this._resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this._updateColumns(entry.contentRect.width);
      }
    });

    if (this.galleryGrid?.nativeElement) {
      this._resizeObserver.observe(this.galleryGrid.nativeElement);
    }
  }

  private _updateColumns(width: number): void {
    if (width > 1200) {
      this.galleryColumns.set(5);
    } else if (width >= 900) {
      this.galleryColumns.set(4);
    } else if (width >= 600) {
      this.galleryColumns.set(3);
    } else if (width >= 400) {
      this.galleryColumns.set(2);
    } else {
      this.galleryColumns.set(1);
    }
  }

  scrollTo(section: 'about' | 'gallery' | 'contact'): void {
    const map: Record<string, ElementRef<HTMLElement>> = {
      about: this.aboutSection,
      gallery: this.gallerySection,
      contact: this.contactSection,
    };

    map[section]?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  openInstagram() {
    window.open('https://www.instagram.com/kawtharalkhouli', '_blank');
  }

  openEmail() {
    window.location.href = 'mailto:kawthar_alkhouli@outlook.com';
  }

  ngOnDestroy(): void {
    this._resizeObserver.disconnect();
  }
}
