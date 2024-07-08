import { TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let httpTestingController: HttpTestingController;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [HttpClientTestingModule, IonicModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Se Creo el componente correctamente', () => {
    const fixture = TestBed.createComponent(RegisterPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
