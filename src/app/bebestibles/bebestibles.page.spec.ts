import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebestiblesPage } from './bebestibles.page';

describe('BebestiblesPage', () => {
  let component: BebestiblesPage;
  let fixture: ComponentFixture<BebestiblesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BebestiblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
