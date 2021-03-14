import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxTestComponent } from './nx-test.component';

describe('NxTestComponent', () => {
  let component: NxTestComponent;
  let fixture: ComponentFixture<NxTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
