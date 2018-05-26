import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronicityComponent } from './synchronicity.component';

describe('SynchronicityComponent', () => {
  let component: SynchronicityComponent;
  let fixture: ComponentFixture<SynchronicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynchronicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchronicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
