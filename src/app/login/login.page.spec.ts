import { TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let httpTestingController: HttpTestingController;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [HttpClientTestingModule, IonicModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Se Creo el componente correctamente', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
