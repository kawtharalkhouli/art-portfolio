import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWallComponent } from './the-wall.component';

describe('TheWallComponent', () => {
  let component: TheWallComponent;
  let fixture: ComponentFixture<TheWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheWallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
