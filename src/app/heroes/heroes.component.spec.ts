import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
// estas pruebas unitarias se centran en garantizar que el componente HeroesComponent 
// se pueda crear correctamente. La prueba se ejecuta para verificar si el componente se ha 
// configurado adecuadamente y está listo para su uso en la aplicación. 
// Esto es importante para asegurarse de que el componente funcione según lo esperado.
describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
