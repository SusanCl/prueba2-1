import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
// estas pruebas unitarias se centran en garantizar que el componente MessagesComponent se pueda
// crear correctamente. La prueba se ejecuta para verificar si el componente se ha configurado 
// adecuadamente y está listo para su uso en la aplicación. Esto es importante para asegurarse 
// de que el componente funcione según lo esperado.
describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent]
    });
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
