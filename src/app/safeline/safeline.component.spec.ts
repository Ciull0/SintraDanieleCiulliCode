import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafelineComponent } from './safeline.component';

describe('SafelineComponent', () => {
  let component: SafelineComponent;
  let fixture: ComponentFixture<SafelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
