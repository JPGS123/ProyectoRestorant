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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
