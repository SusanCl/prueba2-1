import { Injectable } from '@angular/core';
// MessageService es un servicio que permite agregar y gestionar mensajes o notificaciones 
// en una aplicación Angular. Se utiliza para registrar eventos o comunicaciones importantes 
// dentro de la aplicación y puede ser utilizado por otros componentes o servicios para mostrar 
// mensajes a los usuarios. La notación @Injectable({ providedIn: 'root' }) garantiza que una única
// instancia de este servicio esté disponible en toda la aplicación.
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
