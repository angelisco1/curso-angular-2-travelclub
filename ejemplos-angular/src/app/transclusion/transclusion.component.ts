import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transclusion',
  templateUrl: './transclusion.component.html',
  styleUrls: ['./transclusion.component.css']
})
export class TransclusionComponent implements OnInit {

  imagenAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  nombreLogo: string = 'React'

  constructor() { }

  ngOnInit(): void {
  }

}
