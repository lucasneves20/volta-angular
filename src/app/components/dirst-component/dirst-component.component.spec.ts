import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirstComponentComponent } from './dirst-component.component';

describe('DirstComponentComponent', () => {
  let component: DirstComponentComponent;
  let fixture: ComponentFixture<DirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirstComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
