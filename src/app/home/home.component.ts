import { Component, computed, ElementRef, HostListener, signal, ViewChild, WritableSignal } from '@angular/core';
import { FeaturedComponent } from './featured/featured.component';

interface GalleryItems {
  id: number;
  src: string;
  name: string;
  tag: string[];
}

@Component({
  selector: 'app-home',
  imports: [FeaturedComponent],
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
  activeFilter: WritableSignal<string> = signal<string>('All');
  filterTags: WritableSignal<string[]> = signal(['All', 'Florals', 'Doodles', 'Sketches', 'Kawaii', 'Watercolor', 'Aesthetic', 'Mandala', 'Bookmarks', 'Acrylic Paint', 'Polaroids']);

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Gallery Items
  galleryItems: WritableSignal<GalleryItems[]> = signal<GalleryItems[]>([
    {
      id: 1,
      src: 'images/artwork-14.jpg',
      name: 'Pinterest Inspired Doodles 💖🌸💗🧸🩷🌷💖',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 2,
      src: 'images/art-12.jpg',
      name: 'Cute Bow Symbol Doodle 🎀💖🌷',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 3,
      src: 'images/cute-artwork-15.jpg',
      name: 'Taylor Swift Aesthetic Doodles 🩷🌷',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 4,
      src: 'images/cute-artwork-19.jpg',
      name: 'Aesthetic Doodles 🩷✨🌸',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 5,
      src: 'images/cute-artwork-11.jpg',
      name: 'Taylor Swift Aesthetic Doodles 🩷',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 6,
      src: 'images/cute-artwork-10.jpg',
      name: 'Cute Kawaii Character Doodle 🧸🩷🌷🎀',
      tag: ['Doodles', 'Aesthetic', 'Kawaii'],
    },
    {
      id: 7,
      src: 'images/artwork-02.jpg',
      name: 'Lilies Moon Sketch 🌙✨🌸🌿🤍',
      tag: ['Florals', 'Sketches', 'Aesthetic'],
    },
    {
      id: 8,
      src: 'images/cute-artwork-05.jpg',
      name: 'Pinterset Inspired Doodles ☕🧸🩷🌸✨',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 9,
      src: 'images/cute-artwork-12.jpg',
      name: 'Taylor Swift Aesthetic Doodles 🩷🩶🖤',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 10,
      src: 'images/cute-artwork-20.jpg',
      name: 'Aesthetic Doodles 💘🏹🩷',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 11,
      src: 'images/art-11.jpg',
      name: 'Pinterest Inspired Doodles 🎀🏹🦋💗🩷🌸✨🫧💕',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 12,
      src: 'images/cute-artwork-18.jpg',
      name: 'Aesthetic Bow Sketch 🩵🍒',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 13,
      src: 'images/artwork-07.jpg',
      name: 'Cute Bicycle Doodle 🚲🌷🧺🌿✨',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 14,
      src: 'images/artwork-04.jpg',
      name: 'Aesthetic Sketch 🌙💐🌸☁️✨',
      tag: ['Florals', 'Aesthetic', 'Sketches'],
    },
    {
      id: 15,
      src: 'images/art-03.jpg',
      name: 'Aesthetic Sketch 🌷🌿✨💐',
      tag: ['Aesthetic', 'Sketches'],
    },
    {
      id: 16,
      src: 'images/cute-artwork-08.jpg',
      name: 'Pinterset Inspired Doodles 🎀🌸🩷💫',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 17,
      src: 'images/artwork-11.jpg',
      name: 'Snoopy Playing the Guitar Doodle 🎸🎶✨💗🎵🧸🎧',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 18,
      src: 'images/artwork-03.jpg',
      name: 'Pinterest Inspired Sketch 🕸️🕷️💗❤️🖤✨🌙🫧',
      tag: ['Florals', 'Sketches', 'Aesthetic'],
    },
    {
      id: 19,
      src: 'images/art-14.jpg',
      name: 'Pinterset Inspired Sketch 🦋🌻💛🌞',
      tag: ['Aesthetic', 'Sketches'],
    },
    {
      id: 20,
      src: 'images/cute-artwork-02.jpg',
      name: 'Pinterset Inspired Doodles 🎀🌸🩷💫',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 21,
      src: 'images/art-09.jpg',
      name: 'Kawaii Pink Cat 🦋🌻💛🌞',
      tag: ['Aesthetic', 'Doodles', 'Kawaii'],
    },
    {
      id: 22,
      src: 'images/art-15.jpg',
      name: 'Pinterest Inspired Skecth ☀️🌊🌙✨',
      tag: ['Aesthetic', 'Sketch'],
    },
    {
      id: 23,
      src: 'images/cute-artwork-09.jpg',
      name: 'Cute Kawaii Cat Doodle 🌸🩷💫',
      tag: ['Doodles', 'Aesthetic', 'Kawaii'],
    },
    {
      id: 24,
      src: 'images/art-17.jpg',
      name: 'Cute Duck Doodle Sketch ✨⭐🤍',
      tag: ['Aesthetic', 'Sketch', 'Doodles'],
    },
    {
      id: 25,
      src: 'images/art-04.jpg',
      name: 'Taylor Swift Cardigan Sketch 🌸🩶🩷🫧',
      tag: ['Aesthetic', 'Sketch'],
    },
    {
      id: 26,
      src: 'images/art-05.jpg',
      name: 'Lyrics Sketch Combo 🩶💗🫧🌸✨🎀',
      tag: ['Aesthetic', 'Sketch'],
    },
    {
      id: 27,
      src: 'images/art-08.jpg',
      name: 'Pink Doodles 🌸💗🩷🤍🩶',
      tag: ['Aesthetic', 'Doodles'],
    },
    {
      id: 28,
      src: 'images/art-16.jpg',
      name: 'Cute Swan Doodle Sketch 🩷🤍🩶',
      tag: ['Aesthetic', 'Doodles'],
    },
    {
      id: 29,
      src: 'images/art-13.jpg',
      name: 'Cute Pinterest Inspired Sketch 🖤🩷🩶✨',
      tag: ['Aesthetic', 'Doodles'],
    },
    {
      id: 30,
      src: 'images/artwork-12.jpg',
      name: 'Pinterest Inspired Doodles 🌷🌻🧸💞✨',
      tag: ['Doodles', 'Aesthetic'], 
    },
    {
      id: 31,
      src: 'images/artwork-01.jpg',
      name: 'Pinterest Inspired Sketch 🌷🕸️✨❤️🌙💐',
      tag: ['Doodles', 'Aesthetic'], 
    },
    { 
      id: 32,
      src: 'images/spring-time-scribbles.jpg',
      name: 'Pinterest Inspired Doodles 🌼🫐',
      tag: ['Doodles', 'Sketches'],
    },
    {
      id: 33,
      src: 'images/cherry-blossoms.jpg',
      name: 'Cherry Blossoms 🌸🩷',
      tag: ['Florals', 'Sketches'],
    },
    {
      id: 34,
      src: 'images/cute-doodles-13.jpg',
      name: 'Pinterest Inspired Doodles 🌙🍒',
      tag: ['Doodles'],
    },
    {
      id: 35,
      src: 'images/doodles.jpg',
      name: 'Cute Doodles 🌼🐝🍯💛',
      tag: ['Doodles'],
    },
    {
      id: 36,
      src: 'images/cute-doodles.jpg',
      name: 'Cute Doodles ✨💛🐝🍯',
      tag: ['Doodles'],
    },
    {
      id: 37,
      src: 'images/pink-doodles.jpg',
      name: 'Pink Doodles 🌸🧸🩷🌷',
      tag: ['Doodles'],
    },
    {
      id: 38,
      src: 'images/bunny-hearts-and-pumpkin-smiles.jpg',
      name: 'Pinterest Inspired Doodles 🧡🌼✨',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 39,
      src: 'images/heart-floral-wreath.jpg',
      name: 'Heart Floral Wreath 🌸🌼💫',
      tag: ['Watercolor', 'Florals', 'Aesthetic'],
    },
    
    {
      id: 40,
      src: 'images/pink-floral-artwork.jpg',
      name: 'Pink Floral Artwork 🌸🌷🌺',
      tag: ['Florals'],
    },
    
    {
      id: 41,
      src: 'images/spring-in-pastel-blooms.jpg',
      name: 'Spring Coded Artwork ✨🩷💗',
      tag: ['Florals', 'Aesthetic'],
    },
    
    {
      id: 42,
      src: 'images/walle_artwork.jpg',
      name: 'WALL-E Artwork 🖤✨🧸',
      tag: ['Doodles'],
    },
    {
      id: 43,
      src: 'images/lilies-sketch.jpg',
      name: 'Lilies Sketch 🌺🩷',
      tag: ['Sketches', 'Florals'],
    },
    {
      id: 44,
      src: 'images/whimsical-doodles.jpg',
      name: 'Pinterest Inspired Doodles 🍩🍒🎀',
      tag: ['Sketches', 'Doodles'],
    },
    {
      id: 45,
      src: 'images/cute-bunny.jpg',
      name: 'Cute Bunny Doodles 🥺🥰🫶🧸🐻🐰',
      tag: ['Sketches', 'Doodles', 'Kawaii'],
    },
    {
      id: 46,
      src: 'images/lilies.jpg',
      name: 'Lilies 🌸🌷🌼✨💫',
      tag: ['Sketches', 'Florals'],
    },
    {
      id: 47,
      src: 'images/acrylic-paint.jpg',
      name: 'Small Acrylic Sketch 🩷💖💗',
      tag: ['Acrylic Paint', 'Florals'],
    },
    {
      id: 48,
      src: 'images/palestine-sketch.jpg',
      name: 'Palestine Sketch 🖤🤍💚❤️🌿🫒🌾',
      tag: ['Sketches'],
    },
    {
      id: 49,
      src: 'images/sunflower-bookmark-02.jpg',
      name: 'Sunflower Bookmark 🧡✨🌿🌻',
      tag: ['Sketches', 'Bookmarks', 'Florals'],
    },
    {
      id: 50,
      src: 'images/doodles-02.jpg',
      name: 'Pink Doodles 💕🎀🌷💖',
      tag: ['Doodles'],
    },
    {
      id: 51,
      src: 'images/cute-doodles-03.jpg',
      name: 'Cute Pinterest Inspired Doodles 🦋🍓🌸🫧',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 52,
      src: 'images/cute-doodles-04.jpg',
      name: 'Cute Bunny and Teddy Bear Doodles 🫐🐰🧸✨🤍💙',
      tag: ['Sketches', 'Doodles', 'Kawaii'],
    },
    {
      id: 53,
      src: 'images/cute-doodles-05.jpg',
      name: 'Pinterest Inspired Sketch 🦋✨🌸🫧🤍',
      tag: ['Sketches', 'Florals', 'Aesthetic'],
    },
    {
      id: 54,
      src: 'images/cute-doodles-06.jpg',
      name: 'Cute Doodles 🧸🤎✨🤍🌸',
      tag: ['Sketches', 'Doodles', 'Kawaii'],
    },
    {
      id: 55,
      src: 'images/cute-doodles-08.jpg',
      name: 'Kawaii Character Doodles 🍓💞🦋🌸✨🍓',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 56,
      src: 'images/cute-doodles-09.jpg',
      name: 'Cute Polaroid Art 🫐🍰🫧🤍💙',
      tag: ['Polaroids', 'Kawaii'],
    },
    {
      id: 57,
      src: 'images/cute-doodles-10.jpg',
      name: 'Character Doodles 💕🎀🌷🤍✨💖',
      tag: ['Doodles'],
    },
    {
      id: 58,
      src: 'images/cute-doodles-11.jpg',
      name: 'Florals Sketch 💗✨🩷🎀✨💗',
      tag: ['Sketches', 'Florals', 'Aesthetic'],
    },
    {
      id: 59,
      src: 'images/cute-doodles-12.jpg',
      name: 'Pinterest Inspired Doodles 🍓🦋🌸🌺🌷💕✨🍰🍯🌿',
      tag: ['Doodles'],
    },
    
    {
      id: 60,
      src: 'images/cute-doodles-14.jpg',
      name: 'Cherry Doodles 🌸🍒✨🌷🫧',
      tag: ['Doodles', 'Sketches'],
    },
    {
      id: 61,
      src: 'images/cherry-blossom.jpg',
      name: 'Cherry Blossoms ❤️🍒✨🌸💗🍒',
      tag: ['Doodles', 'Florals'],
    },
    {
      id: 62,
      src: 'images/pinterest-inspired.jpg',
      name: 'Pinterest Inspired Doodles 🫐🍰💜🫧🌸',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 63,
      src: 'images/cherry-doodles.jpg',
      name: 'Cherry Doodle ❤️🍒🌺✨💗',
      tag: ['Doodles'],
    },
    {
      id: 64,
      src: 'images/taylor-swift-folklore-sketch.jpg',
      name: 'Taylor Swift Aesthetic Sketch 🤍🩶🕊️✨',
      tag: ['Sketches', 'Aesthetic'],
    },
    {
      id: 65,
      src: 'images/floral.jpg',
      name: 'Cute Floral Artwork 🌺🌻🌸🌷💐✨🍃🌿🌼',
      tag: ['Florals'],
    },
    {
      id: 66,
      src: 'images/kawaii-doodles-04.jpg',
      name: 'Kawaii Doodle 🌷🍒🫧💗🌸',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 67,
      src: 'images/all-pink-doodles.jpg',
      name: 'Pink Artwork 🌸🍒🌷💕✨🫧🤍🌿',
      tag: ['Doodles'],
    },
    {
      id: 68,
      src: 'images/kawaii-doodles-05.jpg',
      name: 'Kawaii Doodle 🐰🤍🌸🫧💕🌷🧁',
      tag: ['Doodles', 'Kawaii'],
    },
    
    {
      id: 69,
      src: 'images/baymax-doodles.jpg',
      name: 'Baymax Doodle 🧸🤎✨🤍🌸',
      tag: ['Doodles'],
    },
    {
      id: 70,
      src: 'images/kawaii-doodles-06.jpg',
      name: 'Kawaii Doodle 🐰🌷🤍🫧🌙',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 71,
      src: 'images/3d-sunflower.jpg',
      name: '3D Sunflower Sketch 🌻✨💛☀️✨🌻',
      tag: ['Sketches', 'Florals'],
    },

    {
      id: 72,
      src: 'images/cute-sketch.jpg',
      name: 'Cute Sketch 💖✨🌺🩷💗✨💘',
      tag: ['Sketches', 'Doodles', 'Kawaii'],
    },
    {
      id: 73,
      src: 'images/kawaii-doodles-07.jpg',
      name: 'Kawaii Doodle 💕🎀🌷🤍✨💖',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 74,
      src: 'images/lilies-sketch-2.jpg',
      name: 'Lilies Sketch 🌿🌸🍃🌷✨',
      tag: ['Florals', 'Sketches', 'Aesthetic'],
    },
    {
      id: 75,
      src: 'images/mandala.jpg',
      name: 'Mandala Artwork 🍃🌿🌼🫧🌸',
      tag: ['Mandala'],
    },
    
    {
      id: 76,
      src: 'images/lilies sketch.jpg',
      name: 'Lilies Sketch 🌻🤍🌿🌷✨',
      tag: ['Florals', 'Sketches', 'Aesthetic'],
    },
    {
      id: 77,
      src: 'images/snoopy-harry-potter.jpg',
      name: 'Snoopy Wearing Harry Potter Uniform Doodle 🧸🤍✨☁️',
      tag: ['Doodles'],
    },
    {
      id: 78,
      src: 'images/kawaii-doodles-02.jpg',
      name: 'Kawaii Doodle 🧸🤎✨🫐✨💙🫐',
      tag: ['Doodles' ,'Kawaii'],
    },
    {
      id: 79,
      src: 'images/watercolor-floral.jpg',
      name: 'Watercolor Floral Artwork 🌺🌼💐✨🍃🌸',
      tag: ['Watercolor', 'Florals', 'Aesthetic'],
    },
    {
      id: 80,
      src: 'images/kawaii-doodles-01.jpg',
      name: 'Kawaii Doodle 🫐🐰🧸💙🤍💜🌸',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 81,
      src: 'images/pinterest-inspired-sketch.jpg',
      name: 'Pinterest Inspired Sketch 🐰🫐🧸🌸🫧✨',
      tag: ['Sketches', 'Doodles'],
    },
    {
      id: 82,
      src: 'images/kawaii-doodles-03.jpg',
      name: 'Kawaii Doodles 🫐💜✨🌙🌿🌸🍰',
      tag: ['Doodles', 'Kawaii'],
    },
    {
      id: 83,
      src: 'images/rose_sketch-1310.jpg',
      name: 'Rose Sketch 🌷🧸💗🫧🌻🎨',
      tag: ['Sketches', 'Floral', 'Aesthetic'],
    },
    {
      id: 84,
      src: 'images/cute_bunny_doodles-1310.jpg',
      name: 'Cute Bunny Doodle 🐰🫧💗☁️✨',
      tag: ['Doodles'],
    },
    {
      id: 85,
      src: 'images/cute-sketch-1310.jpg',
      name: 'Cute Sketch 🍓🌿🌷✨💖',
      tag: ['Doodles'],
    },
    {
      id: 86,
      src: 'images/illustration-02-960.jpg',
      name: 'Pinterest Inspired Sketch 🦋🌺🌿💗✨',
      tag: ['Sketches', 'Aesthetic'],
    },
    {
      id: 87,
      src: 'images/snoopy-960.jpg',
      name: 'Snoopy Doodle 🧸🤎✨🤍🌸',
      tag: ['Sketches', 'Doodles'],
    },
    {
      id: 88,
      src: 'images/illustration-960.jpg',
      name: 'Pinterest Inspired Sketch 🦋🌺🌿💗✨',
      tag: ['Sketches', 'Aesthetic'],
    },
    {
      id: 89,
      src: 'images/ice-bear-1593.jpg',
      name: 'Ice Bear Bookmark 🧸🤎🤍✨🫧🌙🍯🍪',
      tag: ['Bookmarks', 'Aesthetic', 'Doodles'],
    },
    {
      id: 90,
      src: 'images/illustration-02-1593.jpg',
      name: 'Pinterest Inspired Sketch 🌸🍒✨🌷🫧',
      tag: ['Sketches', 'Aesthetic'],
    },
    {
      id: 91,
      src: 'images/illustration-01-1593.jpg',
      name: 'Pinterest Inspired Sketch 🍒❤️🌿✨💖',
      tag: ['Sketches', 'Aesthetic'],
    },
    {
      id: 92,
      src: 'images/ice-bear-900.jpg',
      name: 'Ice Bear & Panda Doodles 💖🌸💗🧸🩷🌷💖',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 93,
      src: 'images/cherry-blossoms-900.jpg',
      name: 'Cherry Blossoms Artwork ❤️🍒🌺✨💗',
      tag: ['Florals', 'Aesthetic', 'Sketches'],
    },
    {
      id: 94,
      src: 'images/cute-characters-sketch.jpg',
      name: 'Cute Characters Sketch 🐰🧸✨🤍💙',
      tag: ['Doodles', 'Sketches'],
    },
    {
      id: 95,
      src: 'images/floral-pattern-01.jpg',
      name: 'Floral Pattern Sketch 💐🌿🌸✨🌺',
      tag: ['Florals', 'Sketches'],
    },
    {
      id: 96,
      src: 'images/sunflower-bookmark-01.jpg',
      name: 'Sunflower Bookmark 🌻🌿✨',
      tag: ['Florals', 'Bookmarks', 'Aesthetic'],
    },
    {
      id: 97,
      src: 'images/random-sketch-02.jpg',
      name: 'Random Floral Sketches 🌺🌸🌷💐✨',
      tag: ['Florals', 'Sketches'],
    },
    {
      id: 98,
      src: 'images/ice-bear-panda-doodle.jpg',
      name: 'Ice Bear & Panda Doodles 🧸🤍',
      tag: ['Doodles', 'Aesthetic'],
    },
    {
      id: 99,
      src: 'images/floral-pattern-03.jpg',
      name: 'Floral Pattern Sketch 💗🌷✨🌿',
      tag: ['Florals', 'Aesthetic', 'Sketches'],
    },
    {
      id: 100,
      src: 'images/kawaii-cat-doodle.jpg',
      name: 'Kawaii Cat Doodle 🤍🌸🫧',
      tag: ['Kawaii', 'Aesthetic', 'Doodles'],
    },
    {
      id: 101,
      src: 'images/pinterest-inspired-sketch-03.jpg',
      name: 'Pinterest Inspired Sketch 💫🌷',
      tag: ['Sketches', 'Doodles'],
    },
    {
      id: 102,
      src: 'images/cute-characters-sketch-01.jpg',
      name: 'Cute Characters Doodles 🧸💙🤍💜✨',
      tag: ['Kawaii', 'Doodles'],
    },
    {
      id: 103,
      src: 'images/heart-doodles.jpg',
      name: 'Cute Doodles 🍓🦋🌷🎨✨',
      tag: ['Doodles'],
    },
    {
      id: 104,
      src: 'images/lilies-pencil-sketch.jpg',
      name: 'Lilies Pencil Sketch 🌷🎨✨',
      tag: ['Florals', 'Sketches'],
    },
    {
      id: 105,
      src: 'images/random-sketch.jpg',
      name: 'Random Florals Sketch 🧸💗🌻🌷🎨✨🫧',
      tag: ['Florals', 'Sketches'],
    },
    {
      id: 106,
      src: 'images/pinterest-inspired-sketch-04.jpg',
      name: 'Pinterest Inspired Sketch 🌻🌷🎨',
      tag: ['Sketches'],
    },
    {
      id: 107,
      src: 'images/floral-pattern-02.jpg',
      name: 'Floral Patterns 🌸✨💗🌷🌻',
      tag: ['Sketches', 'Florals', 'Aesthetic'],
    },
    {
      id: 108,
      src: 'images/ice-bear-sketch.jpg',
      name: 'Ice Bear Doodles ✨🤍🧸',
      tag: ['Sketches', 'Doodles'],
    },
    {
      id: 109,
      src: 'images/honey-doodle.jpg',
      name: 'Cute Kawaii Doodle 🧸🍯✨💛🐝✨🍯🧸',
      tag: ['Kawaii', 'Doodles'],
    },
  ]);

  filteredGalleryItems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') return this.galleryItems();
    return this.galleryItems().filter(item => item.tag.some(t => t.toLowerCase() === filter.toLowerCase()));
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter)
  }

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
