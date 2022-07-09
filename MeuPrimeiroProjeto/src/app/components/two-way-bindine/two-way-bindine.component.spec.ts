import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindineComponent } from './two-way-bindine.component';

describe('TwoWayBindineComponent', () => {
  let component: TwoWayBindineComponent;
  let fixture: ComponentFixture<TwoWayBindineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
