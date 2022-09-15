import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto: IProducto = {
    nombre: '',
    codigo: -1,
    stock: -1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
