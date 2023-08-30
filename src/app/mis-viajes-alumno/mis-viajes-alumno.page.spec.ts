import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisViajesAlumnoPage } from './mis-viajes-alumno.page';

describe('MisViajesAlumnoPage', () => {
  let component: MisViajesAlumnoPage;
  let fixture: ComponentFixture<MisViajesAlumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisViajesAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
