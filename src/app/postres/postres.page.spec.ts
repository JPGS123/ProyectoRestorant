import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostresPage } from './postres.page';

describe('PostresPage', () => {
  let component: PostresPage;
  let fixture: ComponentFixture<PostresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se Creo el componente correctamente', () => {
    const fixture = TestBed.createComponent(PostresPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
