import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfBalanceComponent } from './chart-of-balance.component';

describe('ChartOfBalanceComponent', () => {
  let component: ChartOfBalanceComponent;
  let fixture: ComponentFixture<ChartOfBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
