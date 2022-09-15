import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css']
})
export class NuevaOfertaComponent implements OnInit {
  formOferta: FormGroup

  constructor(private ofertasService: OfertasService, private router: Router) {
    this.formOferta = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      empresa: new FormControl('', Validators.required),
      salario: new FormControl(18000, [Validators.required, Validators.min(14000)]),
    })
  }

  ngOnInit(): void {
  }

  guardar() {
    const nuevaOferta = this.formOferta.value
    this.ofertasService.createOferta(nuevaOferta)
      .subscribe({
        next: (data: any) => {
          console.log({ data })
          const idOferta = data.name
          this.router.navigate(['/ofertas', idOferta])
        },
        error: (err) => {
          alert(JSON.stringify(err))
        }
      })
  }

}
