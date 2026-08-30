import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloralsComponent } from './florals.component';

describe('FloralsComponent', () => {
  let component: FloralsComponent;
  let fixture: ComponentFixture<FloralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloralsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
