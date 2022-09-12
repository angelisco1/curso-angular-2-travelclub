import { Component, OnInit, ViewChild } from '@angular/core';
import { AudioComponent } from './audio/audio.component';
import { HostDirective } from './host.directive';
import { ModalComponent } from './modal/modal.component';
import { VideoComponent } from './video/video.component';

interface IMedia {
  titulo: string;
  tipo: string;
  src: string;
}

@Component({
  selector: 'app-componentes-dinamicos',
  templateUrl: './componentes-dinamicos.component.html',
  styleUrls: ['./componentes-dinamicos.component.css']
})
export class ComponentesDinamicosComponent implements OnInit {
  @ViewChild('modal') modal!: ModalComponent;
  @ViewChild(HostDirective) host!: HostDirective;

  listaVideos: Array<IMedia> = [
    { src: 'assets/video.mp4', titulo: 'Video 1', tipo: 'video' },
    { src: 'assets/video2.mp4', titulo: 'Video 2', tipo: 'video' },
    { src: 'assets/video.mp4', titulo: 'Video 3', tipo: 'video' },
  ]
  listaAudios: Array<IMedia> = [
    { src: 'assets/audio.mp3', titulo: 'Audio 1', tipo: 'audio' },
    { src: 'assets/audio.mp3', titulo: 'Audio 2', tipo: 'audio' },
    { src: 'assets/audio.mp3', titulo: 'Audio 3', tipo: 'audio' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  mostrarComponente(media: IMedia) {
    this.host.viewContainerRef.clear()
    const tipoDelComponente = media.tipo === 'audio' ? AudioComponent : VideoComponent
    const componente = this.host.viewContainerRef.createComponent(tipoDelComponente)
    componente.instance.src = media.src
    this.modal.abrir()
  }

}
