import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
//  se centran en garantizar que el servicio MessageService se pueda crear correctamente.
// La prueba se ejecuta para verificar si el servicio se ha configurado adecuadamente y está
// listo para su uso en la aplicación. Esto es importante para asegurarse de que el servicio
// pueda registrar y manejar mensajes o notificaciones en la aplicación de manera efectiva.
describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
