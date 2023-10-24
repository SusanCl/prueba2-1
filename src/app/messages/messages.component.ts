import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
// MessagesComponent es un componente Angular que se utiliza para mostrar mensajes en la interfaz 
// de usuario. Utiliza el servicio messageService para acceder a los mensajes y mostrarlos en la 
// plantilla. Este componente se puede incluir en otras partes de la aplicación donde se desee 
// mostrar mensajes o notificaciones.
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
