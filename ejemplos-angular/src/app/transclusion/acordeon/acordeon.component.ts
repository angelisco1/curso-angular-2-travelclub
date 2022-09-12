import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {
  // @Input() titulo: string = ''
  cerrado: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.cerrado = !this.cerrado
  }
}
