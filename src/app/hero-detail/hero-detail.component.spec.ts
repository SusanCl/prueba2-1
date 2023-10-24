import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
// estas pruebas unitarias se centran en garantizar que el componente HeroDetailComponent se pueda
// crear correctamente. La prueba se ejecuta para verificar si el componente se ha configurado
// adecuadamente y está listo para su uso en la aplicación. Esto es importante para asegurarse de 
// que el componente funcione según lo esperado.
describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
