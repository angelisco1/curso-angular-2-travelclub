import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  cerrado: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  cerrar() {
    this.cerrado = true
  }

  abrir() {
    this.cerrado = false
  }

}
