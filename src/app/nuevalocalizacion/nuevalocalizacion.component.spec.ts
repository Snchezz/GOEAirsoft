import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevalocalizacionComponent } from './nuevalocalizacion.component';

describe('NuevalocalizacionComponent', () => {
  let component: NuevalocalizacionComponent;
  let fixture: ComponentFixture<NuevalocalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevalocalizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevalocalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
