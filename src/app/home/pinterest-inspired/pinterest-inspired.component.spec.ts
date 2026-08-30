import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestInspiredComponent } from './pinterest-inspired.component';

describe('PinterestInspiredComponent', () => {
  let component: PinterestInspiredComponent;
  let fixture: ComponentFixture<PinterestInspiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinterestInspiredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinterestInspiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
