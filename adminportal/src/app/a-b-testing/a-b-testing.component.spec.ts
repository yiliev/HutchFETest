import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABTestingComponent } from './a-b-testing.component';

describe('ABTestingComponent', () => {
  let component: ABTestingComponent;
  let fixture: ComponentFixture<ABTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
