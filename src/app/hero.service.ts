// Capitulo 5: Del paso 3: Ingresamos contenido de hero.service.ts
//  Importa el decorador Injectable desde @angular/core. Este decorador se utiliza para marcar la clase HeroService como un servicio inyectable en Angular, lo que significa que puede ser inyectado en otros componentes o servicios de la aplicación.
import { Injectable } from '@angular/core';
//  Importa las clases Observable y of de la biblioteca RxJS. Estas clases se utilizan para trabajar con observables, que son una parte fundamental de la programación reactiva en Angular. Los observables se utilizan para manejar secuencias de datos asincrónicos.
import { Observable, of } from 'rxjs';
// Importa la interfaz Hero desde un archivo llamado 'hero'. Esta interfaz define la estructura de un objeto héroe y se utiliza para tipar los datos relacionados con los héroes en la aplicación.
import { Hero } from './hero';
// Importa una constante HEROES desde un archivo llamado 'mock-heroes'. Esta constante contiene un array de objetos que representan héroes ficticios y se utiliza como fuente de datos para la aplicación.
import { HEROES } from './mock-heroes';
//  Importa la clase MessageService desde un archivo llamado 'message.service'. Esta clase se utiliza para gestionar mensajes y notificaciones en la aplicación.
import { MessageService } from './message.service';
//Este decorador se utiliza para marcar una clase como un servicio inyectable en Angular. Esto significa que la clase HeroService se puede inyectar en otros componentes, servicios o módulos de la aplicación.
//  La opción providedIn se establece en 'root', lo que indica que el servicio HeroService se proporcionará a nivel de toda la aplicación.
@Injectable({ providedIn: 'root' })
// Esto define la clase HeroService, que se utiliza para proporcionar funcionalidades relacionadas con los héroes en la aplicación Angular. La clase contendrá métodos y lógica para recuperar, actualizar y gestionar datos de héroes.
export class HeroService {
//  Este es el constructor de la clase HeroService. Recibe un parámetro de tipo MessageService que se utiliza para inyectar una instancia de MessageService en el servicio.
  constructor(private messageService: MessageService) { }
// La inyección de MessageService en HeroService permite al servicio HeroService utilizar MessageService para registrar mensajes y notificaciones.
// Este es un método que se encarga de recuperar una lista de héroes. La función getHeroes no toma ningún parámetro.
  getHeroes(): Observable<Hero[]> { //  El método getHeroes devuelve un objeto de tipo Observable que emite una matriz (array) de objetos de tipo Hero.
    // Aquí se crea una instancia de un observable llamado heroes utilizando la función of de RxJS. Se pasa la constante HEROES como valor.
    const heroes = of(HEROES);
    // Se llama al método add del servicio MessageService para agregar un mensaje que indica que los héroes han sido recuperados.
    this.messageService.add('HeroService: fetched heroes');
    //  Finalmente, el método devuelve el observable heroes. Esto significa que cuando se llama al método getHeroes, se obtendrá un observable que emitirá la lista de héroes
    return heroes;
  }
//
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    // Aquí se busca un héroe en la constante HEROES que coincida con el id proporcionado como parámetro
    const hero = HEROES.find(h => h.id === id)!; // La función find busca en la matriz de héroes y devuelve el primer héroe que tenga el mismo id.
    // Se llama al método add del servicio MessageService para registrar un mensaje que indica que se ha recuperado un héroe específico con el id proporcionado. 
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // El método devuelve un observable que emite el héroe encontrado. Esto significa que cuando se llama al método getHero, se obtendrá un observable que emitirá el héroe correspondiente al id especificado. 
    return of(hero);
  }
}
