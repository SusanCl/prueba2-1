// Capitulo 5: Del paso 2: Ingresamos el contenido de app.module.ts
// Importa el decorador NgModule desde @angular/core. Este decorador se utiliza para configurar módulos en Angular.
import { NgModule } from '@angular/core';
// Importa el módulo BrowserModule desde @angular/platform-browser, que es necesario para ejecutar la aplicación Angular en un navegador web.
import { BrowserModule } from '@angular/platform-browser';
// Importa el módulo FormsModule desde @angular/forms. Este módulo proporciona soporte para trabajar con formularios y enlaces de datos en la aplicación.
import { FormsModule } from '@angular/forms';
// Importa el componente principal de la aplicación, AppComponent, desde un archivo llamado 'app.component'.
import { AppComponent } from './app.component';
//  Importa el componente DashboardComponent desde un archivo llamado 'dashboard.component'. Este componente probablemente se utiliza para mostrar un panel de control en la aplicación.
import { DashboardComponent } from './dashboard/dashboard.component';
// Importa el componente HeroDetailComponent desde un archivo llamado 'hero-detail.component'. Este componente se utiliza para mostrar detalles específicos de un héroe.
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// Importa el componente HeroesComponent desde un archivo llamado 'heroes.component'. Este componente está relacionado con la gestión de héroes en la aplicación.
import { HeroesComponent } from './heroes/heroes.component';
//  Importa el componente MessagesComponent desde un archivo llamado 'messages.component'. Este componente se utiliza para mostrar mensajes y notificaciones en la aplicación.
import { MessagesComponent } from './messages/messages.component';
// Importa el módulo de enrutamiento personalizado AppRoutingModule desde un archivo llamado 'app-routing.module'. Este módulo se utiliza para configurar las rutas de la aplicación.
import { AppRoutingModule } from './app-routing.module';
// se utiliza para configurar y organizar los módulos y componentes en la aplicación. 
@NgModule({
  // Esta es una propiedad del objeto de configuración del módulo que se utiliza para enumerar los módulos que se deben importar y utilizar en este módulo. 
  imports: [
    // Importado desde @angular/platform-browser, se necesita para ejecutar la aplicación Angular en un navegador web.
    BrowserModule,
    //  Importado desde @angular/forms, proporciona soporte para trabajar con formularios y enlaces de datos en la aplicación.
    FormsModule,
    // Importado desde 'app-routing.module', este es el módulo de enrutamiento personalizado que contiene la configuración de las rutas de la aplicación.
    AppRoutingModule
  ],
  // encuentra dentro de la configuración de un módulo en Angular y enumera los componentes que están disponibles en ese módulo
  declarations: [
    // Este es el componente principal de la aplicación, que suele representar la estructura general de la interfaz de usuario.
    AppComponent,
    // Este componente probablemente se utiliza para mostrar un panel de control en la aplicación, con información resumida o datos destacados.
    DashboardComponent,
    // Este componente se utiliza para gestionar la lista de héroes en la aplicación, como agregar, editar o eliminar héroes.
    HeroesComponent,
    // Este componente se encarga de mostrar los detalles específicos de un héroe seleccionado, como su nombre y habilidades.
    HeroDetailComponent,
    //  Este componente se utiliza para mostrar mensajes y notificaciones en la aplicación, como mensajes de éxito, error o información.
    MessagesComponent
  ],
  // La propiedad bootstrap asegura que AppComponent se inicie y se muestre al cargar la aplicación, y desde allí, otros componentes y funcionalidades pueden ser accedidos y utilizados.
  bootstrap: [ AppComponent ]
  // Es importante que el componente raíz contenga la estructura general de la interfaz de usuario y, a menudo, se utiliza para definir la estructura principal de la aplicación.
})
// define la clase AppModule. En el contexto de una aplicación Angular, esta clase representa el módulo principal de la aplicación
export class AppModule { }
// puede contener configuraciones adicionales, como las importaciones de otros módulos, declaraciones de componentes, configuraciones de enrutamiento y configuraciones de proveedores de servicios.