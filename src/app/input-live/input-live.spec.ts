import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLive } from './input-live';

describe('InputLive', () => {
  let component: InputLive;
  let fixture: ComponentFixture<InputLive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
