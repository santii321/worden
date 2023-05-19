import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  public appPages = [
    { title: 'Carnet', url: '/welcome', icon: 'finger-print' },
    { title: 'Reservar Puesto', url: '/puesto', icon: 'golf' },
    { title: 'Servicios', url: '/servicios', icon: 'grid' },
    { title: 'Fechas de pago', url: '/pagos', icon: 'calendar-number' },
    { title: 'SST', url: '/sst', icon: 'shield-checkmark' },
    { title: 'Cerrar Sesíon', url: '/', icon: 'backspace' },
  ];
  constructor() { }

  ngOnInit() {}

}
