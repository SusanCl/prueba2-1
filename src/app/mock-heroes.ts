import { Hero } from './hero';
// La exportación de esta matriz permite utilizar estos datos en otros archivos de la aplicación
// Angular. Es común que se utilice para proporcionar datos de ejemplo o datos iniciales para una
// aplicación que trabaja con héroes o personajes similares. Los datos pueden ser utilizados por
// servicios o componentes para mostrar información sobre estos héroes en la interfaz de usuario
// de la aplicación.
export const HEROES: Hero[] = [
  { id: 11, name: 'batman' },
  { id: 12, name: 'supergirl' },
  { id: 13, name: 'wonder woman' },
  { id: 14, name: 'hombre araña' },
  { id: 15, name: 'flash' },
  { id: 16, name: 'aquaman' },
  { id: 17, name: 'iron man' },
  { id: 18, name: 'thor' },
  { id: 19, name: 'capitan america' },
  { id: 20, name: 'Tornado' }
];