import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarReservsaComponent } from './realizar-reservsa.component';

describe('RealizarReservsaComponent', () => {
  let component: RealizarReservsaComponent;
  let fixture: ComponentFixture<RealizarReservsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizarReservsaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealizarReservsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
