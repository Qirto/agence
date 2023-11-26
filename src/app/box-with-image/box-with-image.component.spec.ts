import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithImageComponent } from './box-with-image.component';

describe('BoxWithImageComponent', () => {
  let component: BoxWithImageComponent;
  let fixture: ComponentFixture<BoxWithImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxWithImageComponent]
    });
    fixture = TestBed.createComponent(BoxWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
