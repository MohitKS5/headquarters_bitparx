import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeStreamsComponent } from './trade-streams.component';

describe('TradeStreamsComponent', () => {
  let component: TradeStreamsComponent;
  let fixture: ComponentFixture<TradeStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
