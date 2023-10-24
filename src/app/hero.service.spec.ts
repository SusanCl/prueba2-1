// Primeramente importa los modulos que esta ocupando 

import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
//  estas pruebas unitarias se centran en garantizar que el servicio HeroService se pueda crear 
//  correctamente. La prueba se ejecuta para verificar si el servicio se ha configurado 
//  adecuadamente y está listo para su uso en la aplicación Angular.
//  Esto es esencial para asegurarse de que el servicio pueda proporcionar funcionalidad a otros
//  componentes y servicios en la aplicación.
describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
