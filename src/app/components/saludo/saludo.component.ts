import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent {
  @Input() nombre: string = 'default';
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  // Ejemplo para gestionar evento Click en el DOM y enviar un texto al padre

  enviarMensajeAlPadre(): void {
    this.mensajeEmitter.emit(
      `Hola, ${this.nombre}. Alerta despachada desde un click en el botón`
    );
  }
}
