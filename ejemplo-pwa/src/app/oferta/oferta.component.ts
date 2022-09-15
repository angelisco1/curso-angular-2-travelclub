import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  oferta: any = null
  id: string | null = ''

  constructor(private ofertasService: OfertasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('idOferta')

      if (this.id) {
        this.ofertasService.getOferta(this.id)
          .subscribe((oferta: any) => {
            this.oferta = oferta
          })
      }

    })
  }

  eliminar() {
    if (this.id) {
      this.ofertasService.deleteOferta(this.id)
        .subscribe(() => {
          this.router.navigateByUrl('/')
        })
    }
  }

}
