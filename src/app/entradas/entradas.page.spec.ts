import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradasPage } from './entradas.page';

describe('EntradasPage', () => {
  let component: EntradasPage;
  let fixture: ComponentFixture<EntradasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se Creo el componente correctamente', () => {
    const fixture = TestBed.createComponent(EntradasPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
