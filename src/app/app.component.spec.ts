//  Primeramente esta importa varios módulos y componentes
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
//  estas pruebas se enfocan en garantizar que el componente AppComponent se cree correctamente, 
//  que la propiedad title tenga el valor correcto y que el título se represente adecuadamente en 
//  la vista.
//  Estas pruebas son esenciales para asegurarse de que el componente funcione según lo
//  esperado en la aplicación Angular.
describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'micarAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('micarAngular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('micarAngular app is running!');
  });
});
