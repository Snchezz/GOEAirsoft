import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoslobosComponent } from './loslobos.component';

describe('LoslobosComponent', () => {
  let component: LoslobosComponent;
  let fixture: ComponentFixture<LoslobosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoslobosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoslobosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
