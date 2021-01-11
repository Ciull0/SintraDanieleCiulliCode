import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSmallComponent } from './hero-small.component';

describe('HeroSmallComponent', () => {
  let component: HeroSmallComponent;
  let fixture: ComponentFixture<HeroSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
