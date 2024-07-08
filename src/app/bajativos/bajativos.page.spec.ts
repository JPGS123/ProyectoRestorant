import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BajativosPage } from './bajativos.page';

describe('BajativosPage', () => {
  let component: BajativosPage;
  let fixture: ComponentFixture<BajativosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BajativosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se Creo el componente correctamente', () => {
    const fixture = TestBed.createComponent(BajativosPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
