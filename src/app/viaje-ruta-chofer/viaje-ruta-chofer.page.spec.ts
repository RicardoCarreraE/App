import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeRutaChoferPage } from './viaje-ruta-chofer.page';

describe('ViajeRutaChoferPage', () => {
  let component: ViajeRutaChoferPage;
  let fixture: ComponentFixture<ViajeRutaChoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajeRutaChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
