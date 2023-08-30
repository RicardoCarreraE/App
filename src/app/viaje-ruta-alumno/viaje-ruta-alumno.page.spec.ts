import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeRutaAlumnoPage } from './viaje-ruta-alumno.page';

describe('ViajeRutaAlumnoPage', () => {
  let component: ViajeRutaAlumnoPage;
  let fixture: ComponentFixture<ViajeRutaAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajeRutaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
