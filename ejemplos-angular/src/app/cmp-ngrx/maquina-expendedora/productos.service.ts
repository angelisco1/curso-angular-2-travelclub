import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface IProducto {
  nombre: string,
  codigo: number,
  stock: number,
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProductos(): Observable<Array<IProducto>> {
    // Aquí iría una petición http get a alguna API
    return of([
      { nombre: 'Perrito piloto', codigo: 23, stock: 5 },
      { nombre: 'Tamagochi', codigo: 3, stock: 10 },
      { nombre: 'Muñeca chochona', codigo: 15, stock: 4 },
    ])
      .pipe(
        delay(600)
      )
  }
}
