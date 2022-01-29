import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoslegalesComponent } from './avisoslegales.component';

describe('AvisoslegalesComponent', () => {
  let component: AvisoslegalesComponent;
  let fixture: ComponentFixture<AvisoslegalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoslegalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoslegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
