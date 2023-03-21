import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = 'Joaquin';

  // Esta función se ejecuta cuando en el hijo se pulsa el botón
  recibirMensajeDelHijo(evento: string) {
    alert(evento);
  }
}
