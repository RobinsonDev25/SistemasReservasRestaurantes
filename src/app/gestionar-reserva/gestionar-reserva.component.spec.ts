import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarReservaComponent } from './gestionar-reserva.component';

describe('GestionarReservaComponent', () => {
  let component: GestionarReservaComponent;
  let fixture: ComponentFixture<GestionarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
