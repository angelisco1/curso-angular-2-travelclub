import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-lista-ofertas',
  templateUrl: './lista-ofertas.component.html',
  styleUrls: ['./lista-ofertas.component.css']
})
export class ListaOfertasComponent implements OnInit {
  ofertas: Array<any> = []

  constructor(private ofertasService: OfertasService, private router: Router) { }

  ngOnInit(): void {
    this.ofertasService.getOfertas()
      .subscribe((ofertas: Array<any>) => {
        this.ofertas = ofertas
      })
  }

  verInfoOferta(id: string) {
    this.router.navigate(['/ofertas', id])
  }

}
