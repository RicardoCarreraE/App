import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisViajesChoferPage } from './mis-viajes-chofer.page';

describe('MisViajesChoferPage', () => {
  let component: MisViajesChoferPage;
  let fixture: ComponentFixture<MisViajesChoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisViajesChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
