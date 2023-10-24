// Capitulo 5: Del Paso 7: Ingresamos contenido de dashboard.component.ts
// 1. Esta línea está importando los símbolos Component y OnInit desde el módulo @angular/core. Estos se utilizan comúnmente en Angular para crear componentes e implementar ganchos del ciclo de vida.
import { Component, OnInit } from '@angular/core';
//  Esta línea está importando el símbolo Hero desde un archivo ubicado en ../hero. Parece que tienes una interfaz o clase Hero definida en ese archivo.
import { Hero } from '../hero';
// Esta línea está importando el símbolo HeroService desde un archivo ubicado en ../hero.service.
// Normalmente, esta es una clase de servicio que se utiliza para interactuar con datos relacionados con héroes en tu aplicación Angular.
import { HeroService } from '../hero.service';
//2.representa la configuración de un componente en Angular utilizando el decorador @Component
@Component({
  // El selector se utiliza para identificar y emparejar este componente en la plantilla HTML de la aplicación. En este caso, el selector es 'app-dashboard', lo que significa que este componente se puede utilizar en la plantilla utilizando la etiqueta <app-dashboard></app-dashboard>.
  selector: 'app-dashboard',
  //  El atributo templateUrl especifica la ubicación del archivo de plantilla HTML que se utilizará para representar la vista de este componente. En este caso, la vista se encuentra en el archivo 'dashboard.component.html'.
  templateUrl: './dashboard.component.html',
  // El atributo styleUrls especifica una matriz de archivos de hojas de estilo CSS que se aplicarán al componente.
  styleUrls: [ './dashboard.component.css' ]
})
//  3.Esta línea de código define la clase DashboardComponent y declara que implementa la interfaz OnInit
// . La implementación de OnInit implica que esta clase tendrá un método llamado ngOnInit() que se ejecutará cuando el componente se inicialice.
export class DashboardComponent implements OnInit {
  // Aquí se declara una propiedad heroes que es un array de objetos de tipo Hero. Esta propiedad se inicializa como un array vacío.
  heroes: Hero[] = [];
// . 4. La inyección de HeroService en el constructor permite que el componente tenga acceso a los métodos y datos proporcionados por el servicio. En otras palabras,
//  el componente puede utilizar heroService para obtener información sobre los héroes.
  constructor(private heroService: HeroService) { }
// 5. Este es el método ngOnInit que se implementa debido a la interfaz OnInit. El método ngOnInit se ejecuta cuando el componente se inicializa.
  ngOnInit(): void {
    // getHeroes(). Este método se utiliza para recuperar la lista de héroes desde el servicio HeroService y asignarla a la propiedad heroes del componente. 
  //  Esto se hace para llenar la lista de héroes que se mostrará en el panel de inicio del componente.
    this.getHeroes();
  }
// 6. Este es el método getHeroes, que se utiliza para obtener la lista de héroes desde el servicio HeroService
  getHeroes(): void {
  //e llama al método getHeroes del servicio HeroService.
  // Este método se encarga de obtener la lista completa de héroes, presumiblemente desde una fuente de datos externa.
    this.heroService.getHeroes()
    // El método subscribe se utiliza para suscribirse al observable que devuelve this.heroService.getHeroes(). Cuando el observable emite los datos de los héroes, se ejecutará la función de callback especificada. En este caso, la función de callback recibe la lista de héroes y asigna una porción de esa lista a la propiedad heroes del componente.
    .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // Esta función de callback toma la lista completa de héroes y utiliza el método slice(1, 5) para obtener una porción de la lista que incluye a los héroes desde el segundo hasta el quinto (índices 1 a 4).
  }
}
