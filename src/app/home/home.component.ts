import { Component, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';

interface GalleryItems {
  id: number;
  src: string;
  name: string;
  tag: string;
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
      src: 'images/pink-floral-artwork.jpg',
      name: 'Pink Floral Artwork',
      tag: 'Florals',
    },
    {
      id: 2,
      src: 'images/pink-doodles.jpg',
      name: 'Pink Doodles',
      tag: 'Doodles',
    },
    {
      id: 3,
      src: 'images/doodles.jpg',
      name: 'Doodles',
      tag: 'Doodles',
    },
    {
      id: 5,
      src: 'images/spring-in-pastel-blooms.jpg',
      name: 'Spring in Pastel Blooms',
      tag: 'Florals',
    },
    {
      id: 6,
      src: 'images/spring-time-scribbles.jpg',
      name: 'Spring Time Scribbles',
      tag: 'Sketches',
    },
    {
      id: 7,
      src: 'images/cherry-blossoms.jpg',
      name: 'Cherry Blossoms',
      tag: 'Sketches',
    },
    {
      id: 4,
      src: 'images/bunny-hearts-and-pumpkin-smiles.jpg',
      name: 'Bunny Hearts and Pumpkin smiles',
      tag: 'Doodles',
    },
    {
      id: 8,
      src: 'images/heart-floral-wreath.jpg',
      name: 'Heart Floral Wreath',
      tag: 'Water Color',
    },
    {
      id: 9,
      src: 'images/cute-doodles.jpg',
      name: 'Cute Doodles',
      tag: 'Doodles',
    },
    {
      id: 13,
      src: 'images/walle_artwork.jpg',
      name: 'WALL-E Artwork',
      tag: 'Doodles',
    },
    {
      id: 11,
      src: 'images/floral-patterns.jpg',
      name: 'Pink Floral Pattern',
      tag: 'Florals',
    },
    {
      id: 12,
      src: 'images/lilies-sketch.jpg',
      name: 'Lilies Sketch',
      tag: 'Sketches',
    },
    {
      id: 20,
      src: 'images/whimsical-doodles.jpg',
      name: 'Whimsical Doodles',
      tag: 'Doodles',
    },
    {
      id: 21,
      src: 'images/cute-bunny.jpg',
      name: 'Cute Bunny Doodles',
      tag: 'Doodles',
    },
    {
      id: 22,
      src: 'images/lilies.jpg',
      name: 'Lilies',
      tag: 'Florals',
    },
    {
      id: 23,
      src: 'images/acrylic-paint.jpg',
      name: 'Samll Acrylic Sketch',
      tag: 'Acrylic Paint',
    },
    {
      id: 25,
      src: 'images/floral-moon-sketch.jpg',
      name: 'Floral Moon Sketch',
      tag: 'Sketches',
    },
    {
      id: 33,
      src: 'images/kawaii.jpg',
      name: 'Kawaii Artwork',
      tag: 'Doodles',
    },
    // {
    //   id: 24,
    //   src: 'images/cherry-blossoms-02.jpg',
    //   name: 'Cherry Blossoms',
    //   tag: 'Sketches',
    // },
    // {
    //   id: 26,
    //   src: 'images/cute-kawaii.jpg',
    //   name: 'Cute Kawaii Characters',
    //   tag: 'Doodles',
    // },
    {
      id: 27,
      src: 'images/palestine-sketch.jpg',
      name: 'Palestine Sketch',
      tag: 'Sketches',
    },
    {
      id: 28,
      src: 'images/sunflower-bookmark-02.jpg',
      name: 'Sunflower Bookmark',
      tag: 'Bookmarks',
    },
    {
      id: 34,
      src: 'images/doodles-02.jpg',
      name: 'Pink Doodles',
      tag: 'Doodles',
    },
    {
      id: 30,
      src: 'images/mandala.jpg',
      name: 'Mandala Artwork',
      tag: 'Mandala',
    },
    {
      id: 31,
      src: 'images/floral-pattern.jpg',
      name: 'Floral Pattern',
      tag: 'Florals',
    },
    {
      id: 32,
      src: 'images/sunflowers.jpg',
      name: 'Sunflowers',
      tag: 'Sketches',
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
