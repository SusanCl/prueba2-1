// Capitulo 5: Del Paso 13: Integramos el contenido de hero-detail.component.ts
// 1. Importa los módulos Component y OnInit desde el paquete @angular/core. Component se utiliza para
// definir componentes de Angular, y OnInit se implementa en clases de componentes para definir 
// el método ngOnInit(), que se ejecuta cuando un componente se inicia.
import { Component, OnInit } from '@angular/core';
// Importa la clase ActivatedRoute desde el paquete @angular/router. ActivatedRoute se utiliza para acceder a la información de la ruta actual, como los parámetros de ruta y las consultas.
import { ActivatedRoute } from '@angular/router';
//  Importa la clase Location desde el paquete @angular/common. Location se utiliza para interactuar con la ubicación del navegador y puede utilizarse para navegar hacia atrás o realizar otras acciones relacionadas con la navegación.
import { Location } from '@angular/common';
// Importa la clase Hero desde un archivo llamado 'hero'. Esto sugiere que existe una definición de clase de héroe en el archivo 'hero' del directorio actual ('../' se refiere al directorio padre).
import { Hero } from '../hero';
// Importa la clase HeroService desde un archivo llamado 'hero.service'. Esto indica que se está utilizando un servicio llamado HeroService en la aplicación para obtener datos relacionados con héroes.
import { HeroService } from '../hero.service';
//  2. define la configuración de un componente en Angular utilizando el decorador @Component
@Component({
  // El selector se utiliza para identificar y emparejar este componente en la plantilla HTML de la aplicación. En este caso, el selector es 'app-hero-detail', lo que significa que este componente se puede utilizar en la plantilla utilizando la etiqueta <app-hero-detail></app-hero-detail>.
  selector: 'app-hero-detail',
  // El atributo templateUrl especifica la ubicación del archivo de plantilla HTML que 
  // se utilizará para representar la vista de este componente. En este caso, la vista se encuentra en el archivo 'hero-detail.component.html'.
  templateUrl: './hero-detail.component.html',
  // El atributo styleUrls especifica una matriz de archivos de hojas de estilo CSS que se aplicarán al componente. En este caso,
  // se utiliza el archivo 'hero-detail.component.css' para aplicar estilos al componente.
  styleUrls: [ './hero-detail.component.css' ]
})
// 3. en Angular que implementa la interfaz OnInit. La implementación de OnInit implica que esta clase tendrá un método llamado ngOnInit() que se ejecutará cuando el componente se inicia
// Esta clase se utiliza para mostrar los detalles de un héroe en la aplicación Angular y realizar tareas de inicialización cuando el componente se carga.
export class HeroDetailComponent implements OnInit {
  // Esta propiedad hero representa un objeto de tipo Hero o puede ser undefined si no se ha inicializado.
  hero: Hero | undefined;
// 4. El constructor de la clase acepta tres parámetros:
  constructor(
  // se utiliza para acceder a los detalles de la ruta actual, como los parámetros de la ruta.
    private route: ActivatedRoute,
  // es una instancia del servicio HeroService que se utilizará para obtener datos relacionados con los héroes.
    private heroService: HeroService,
  // permite interactuar con la ubicación del navegador y se utiliza para realizar acciones relacionadas con la navegación, como volver atrás.
    private location: Location
  ) {}
 //  5. método ngOnInit(), se llama al método getHero()
  ngOnInit(): void {
  // se llama al método getHero(). Esto significa que cuando el componente se inicia, se ejecutará getHero()
// Este método se utiliza para recuperar los detalles de un héroe, posiblemente a partir de un servicio o una fuente de datos. 
    this.getHero();
  }
// 6. se utiliza para obtener los detalles de un héroe y asignarlos a la propiedad hero del componente.
  getHero(): void {
  // Esta línea obtiene el parámetro de ruta 'id' de la URL actual. Convierte el valor en un número y lo almacena en la variable id. Esto se utiliza para identificar el héroe cuyos detalles se deben cargar.
    const id = Number(this.route.snapshot.paramMap.get('id'));
  // Luego, se llama al método getHero(id) del servicio heroService, pasando el id del héroe como argumento. Esto se hace para recuperar los detalles del héroe específico con el id proporcionado.
    this.heroService.getHero(id)
    // El método subscribe se utiliza para suscribirse al observable que devuelve this.heroService.getHero(id). Cuando el observable emite los datos del héroe, se ejecutará la función de callback especificada
    .subscribe(hero => this.hero = hero);
    // 
  }
// 7.
  goBack(): void {
  // este caso, la función de callback asigna el héroe recuperado a la propiedad hero del componente, lo que permite mostrar los detalles del héroe en la vista.
    this.location.back();
  }
}
