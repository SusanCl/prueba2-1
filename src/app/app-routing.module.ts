// Capitulo 5: Del Paso 1: Ingresando contenido de app-routing.module.ts
// Importa el decorador NgModule desde @angular/core.
// Este decorador se utiliza para configurar módulos en Angular.
import { NgModule } from '@angular/core';
// Importa el módulo RouterModule y la interfaz Routes desde @angular/router. 
// Estas importaciones son necesarias para configurar y gestionar enrutamiento en una aplicación Angular.
import { RouterModule, Routes } from '@angular/router';
//  Importa el módulo RouterModule y la interfaz Routes desde @angular/router. Estas importaciones son necesarias para configurar y gestionar enrutamiento en una aplicación Angular.
import { DashboardComponent } from './dashboard/dashboard.component';
// Importa el componente HeroesComponent desde un archivo llamado 'heroes.component'. Este componente está relacionado con la gestión de héroes en la aplicación.
import { HeroesComponent } from './heroes/heroes.component';
// Importa el componente HeroDetailComponent desde un archivo llamado 'hero-detail.component'. Este componente se utiliza para mostrar detalles específicos de un héroe.
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// define un arreglo de rutas en Angular utilizando la interfaz Routes. Cada elemento del arreglo representa una ruta dentro de la aplicación y se asocia a un componente específico.
const routes: Routes = [
  // Esta ruta define la ruta raíz de la aplicación (la URL base). Cuando un usuario navega a la ruta raíz, se redirige automáticamente a la ruta '/dashboard' usando redirectTo
  // El atributo pathMatch: 'full' asegura que la redirección se realice solo cuando la URL completa coincide con ''.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Esta ruta se asocia a la ruta '/dashboard' y utiliza el componente DashboardComponent cuando se navega a esta ruta. Es decir, cuando se visita '/dashboard', se carga el componente DashboardComponent.
  { path: 'dashboard', component: DashboardComponent },
  //  Esta ruta se utiliza para mostrar detalles de un héroe específico. Utiliza el componente HeroDetailComponent y permite pasar un parámetro dinámico ':id' en la URL. El valor del parámetro se utiliza para identificar el héroe cuyos detalles se mostrarán.
  { path: 'detail/:id', component: HeroDetailComponent },
  // como approutingModule ya importa heroesComponent, puede usarlo en el arreglo de rutas
  // Esta ruta se asocia a la ruta '/heroes' y utiliza el componente HeroesComponent. Cuando un usuario visita '/heroes', se carga el componente HeroesComponent.
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  // En esta sección, se importa el módulo RouterModule y se utiliza el método forRoot para configurar las rutas definidas en el arreglo routes. Esto significa que el módulo de enrutamiento AppRoutingModule 
  imports: [ RouterModule.forRoot(routes) ],
  // La propiedad exports permite que otros módulos de la aplicación accedan al módulo de enrutamiento y utilicen las rutas definidas en él. En otras palabras, cuando este módulo se importa en otros módulos de la aplicación, también se pueden usar las rutas definidas en routes.
  exports: [ RouterModule ]
})
// define la clase AppRoutingModule. En una aplicación Angular, un módulo de enrutamiento personalizado, como AppRoutingModule, se utiliza para configurar y organizar las rutas de la aplicación. 
export class AppRoutingModule {}
// Aunque este fragmento de código no contiene mucha lógica visible en sí mismo, su propósito principal es proporcionar una configuración de rutas para la aplicación.
