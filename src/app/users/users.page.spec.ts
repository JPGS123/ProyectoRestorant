import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersPage } from './users.page';

describe('UsersPage', () => {
  let component: UsersPage;
  let fixture: ComponentFixture<UsersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se Creo el componente correctamente', () => {
    const fixture = TestBed.createComponent(UsersPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
