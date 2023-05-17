import { Component, OnInit } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  numeroCodigoBarras: string = '1152225467';

  constructor() { }

  ngOnInit() {
    
  }
  ionViewDidEnter() {
    const canvas = document.getElementById('codigoBarrasCanvas') as HTMLCanvasElement;
    JsBarcode(canvas, this.numeroCodigoBarras, { format: 'CODE128' });
  }


}
