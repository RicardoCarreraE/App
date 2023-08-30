import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoChoferPage } from './auto-chofer.page';

describe('AutoChoferPage', () => {
  let component: AutoChoferPage;
  let fixture: ComponentFixture<AutoChoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutoChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
