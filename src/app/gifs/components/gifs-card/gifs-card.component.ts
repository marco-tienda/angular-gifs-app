import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {
  /**
   * Usamos el operador "!" para indicarle a TS que
   * vamos a recibir siempre información desde el
   * input declarado
   */
  @Input()
  public gif!: Gif;

  /**
   * Verificamos que haya data siempre que se inicianilize
   * nuestra aplicación
   */
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required')
  }
}
