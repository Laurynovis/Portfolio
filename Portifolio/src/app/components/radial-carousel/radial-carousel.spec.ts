import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialCarouselComponent } from './radial-carousel';

describe('RadialCarousel', () => {
  let component: RadialCarouselComponent;
  let fixture: ComponentFixture<RadialCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadialCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadialCarouselComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
