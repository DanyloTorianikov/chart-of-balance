import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingEditingTradesComponent } from './adding-editing-trades.component';

describe('AddingEditingTradesComponent', () => {
  let component: AddingEditingTradesComponent;
  let fixture: ComponentFixture<AddingEditingTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingEditingTradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingEditingTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
