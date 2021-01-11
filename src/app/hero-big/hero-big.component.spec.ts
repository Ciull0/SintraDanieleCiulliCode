import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBigComponent } from './hero-big.component';

describe('HeroBigComponent', () => {
  let component: HeroBigComponent;
  let fixture: ComponentFixture<HeroBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
