import { TestBed } from '@angular/core/testing';
import { ChefsComponent } from './chefs.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

describe('ChefsComponent', () => {
  let component: ChefsComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ChefsComponent],
      imports: [HttpClientTestingModule, IonicModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(ChefsComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Se Creo el componente correctamente', () => {
    const fixture = TestBed.createComponent(ChefsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
