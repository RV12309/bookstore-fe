import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextUiComponent } from './input-text-ui.component';

describe('InputTextUiComponent', () => {
  let component: InputTextUiComponent;
  let fixture: ComponentFixture<InputTextUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextUiComponent]
    });
    fixture = TestBed.createComponent(InputTextUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
