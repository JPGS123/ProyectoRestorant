import { TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let httpTestingController: HttpTestingController;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [HttpClientTestingModule, IonicModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Se Creo el componente correctamente', () => {
    const fixture = TestBed.createComponent(PerfilPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });;
  
});
