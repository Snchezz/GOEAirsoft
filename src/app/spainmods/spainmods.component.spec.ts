import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainmodsComponent } from './spainmods.component';

describe('SpainmodsComponent', () => {
  let component: SpainmodsComponent;
  let fixture: ComponentFixture<SpainmodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainmodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpainmodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
