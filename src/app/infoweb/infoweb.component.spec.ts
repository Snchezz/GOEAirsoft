import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfowebComponent } from './infoweb.component';

describe('InfowebComponent', () => {
  let component: InfowebComponent;
  let fixture: ComponentFixture<InfowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfowebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
