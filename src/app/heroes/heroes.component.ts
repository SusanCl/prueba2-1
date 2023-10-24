// Capitulo 5: Del Paso 10: Integramos el contenido de heroes.component.ts
//  Importa los módulos Component y OnInit desde el paquete @angular/core. Component se utiliza para definir componentes de Angular, y
// OnInit se implementa en clases de componentes para 
//definir el método ngOnInit(), que se ejecuta cuando un componente se inicia.
import { Component, OnInit } from '@angular/core';
// Importa la clase Hero desde un archivo llamado 'hero'. Esto sugiere que hay una definición de clase de héroe en el archivo 'hero' del directorio actual ('../' se refiere al directorio padre).
import { Hero } from '../hero';
// Importa la clase HeroService desde un archivo llamado 'hero.service'. Esto indica que se está utilizando un servicio llamado HeroService en la aplicación para obtener datos relacionados con héroes.
import { HeroService } from '../hero.service';
//
@Component({
  // El selector se utiliza para identificar y emparejar este componente en la plantilla HTML de la aplicación. 
  selector: 'app-heroes', // En este caso, el selector es 'app-heroes', lo que significa que este componente se puede utilizar en la plantilla utilizando la etiqueta <app-heroes></app-heroes>.
  // El atributo templateUrl especifica la ubicación del archivo de plantilla HTML que se utilizará para representar la vista de este componente. En este caso, la vista se encuentra en el archivo 'heroes.component.html'.
  templateUrl: './heroes.component.html',
  // El atributo styleUrls especifica una matriz de archivos de hojas de estilo CSS que se aplicarán al componente. En este caso, se utiliza el archivo 'heroes.component.css' para aplicar estilos al componente.
  styleUrls: ['./heroes.component.css']
})
// Esta línea de código define la clase HeroesComponent y declara que implementa la interfaz OnInit
//  La implementación de OnInit implica que esta clase tendrá un método llamado ngOnInit() que se ejecutará cuando el componente se inicializa. 
export class HeroesComponent implements OnInit {
  // Aquí se declara una propiedad llamada heroes, que es una matriz (array) de objetos de tipo Hero. 
  // Se inicializa como una matriz vacía []. Esta propiedad se utiliza para almacenar la lista de héroes que se mostrará en la vista del componente.
  heroes: Hero[] = [];
// Este es el constructor de la clase HeroesComponent. Recibe un parámetro llamado heroService, que es una instancia del servicio HeroService
  constructor(private heroService: HeroService) { } // La inyección de HeroService en el constructor permite que el componente tenga acceso a los métodos y datos proporcionados por el servicio. 
// Este es el método ngOnInit que se implementa debido a la interfaz OnInit. El método ngOnInit se ejecuta cuando el componente se inicializa. Aquí se puede colocar lógica que debe ejecutarse al inicio del componente.
  ngOnInit(): void {
  // En el método ngOnInit, se llama al método getHeroes(). Esto se hace para iniciar la recuperación de la lista de héroes cuando el componente se carga.
    this.getHeroes();
  }
// Este es el método getHeroes, que se utiliza para obtener la lista de héroes desde el servicio HeroService.
  getHeroes(): void {
  //  Se llama al método getHeroes del servicio HeroService. Este método se encarga de obtener la lista de héroes, presumiblemente desde una fuente de datos externa.
    this.heroService.getHeroes()
    // El método subscribe se utiliza para suscribirse al observable que devuelve this.heroService.getHeroes(). 
    .subscribe(heroes => this.heroes = heroes);
    // . En este caso, la función de callback recibe la lista de héroes y asigna esta lista a la propiedad heroes del componente, lo que permite mostrarla en la vista.
  }
}