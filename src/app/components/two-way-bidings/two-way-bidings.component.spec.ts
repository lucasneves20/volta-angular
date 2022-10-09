import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBidingsComponent } from './two-way-bidings.component';

describe('TwoWayBidingsComponent', () => {
  let component: TwoWayBidingsComponent;
  let fixture: ComponentFixture<TwoWayBidingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBidingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBidingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
