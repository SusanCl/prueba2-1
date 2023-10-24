//  estableciendo una estructura que se utilizará para crear objetos de tipo Hero en tu aplicación.
//  Esto permite una fuerte tipificación en TypeScript, lo que significa que cuando trabajas con 
//  objetos Hero, el compilador de TypeScript puede verificar que las propiedades id y name sean 
//  utilizadas de la manera correcta, lo que ayuda a evitar errores durante el desarrollo. 
//  Esta interfaz se utilizará comúnmente en la definición de datos y en la comunicación entre
//  componentes y servicios en tu aplicación Angular.
export interface Hero {
    id: number;
    name: string;
  }