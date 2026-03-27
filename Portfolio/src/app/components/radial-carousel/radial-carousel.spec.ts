import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialCarousel } from './radial-carousel';

describe('RadialCarousel', () => {
  let component: RadialCarousel;
  let fixture: ComponentFixture<RadialCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadialCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(RadialCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
