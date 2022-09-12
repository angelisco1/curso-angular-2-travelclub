import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-directiva-viewchild',
  templateUrl: './directiva-viewchild.component.html',
  styleUrls: ['./directiva-viewchild.component.css']
})
export class DirectivaViewchildComponent implements OnInit {

  @ViewChild('video') video!: ElementRef<HTMLVideoElement>

  constructor() { }

  ngOnInit(): void {
  }

  play() {
    // console.log(this.video)
    this.video.nativeElement.play()
  }

  pause() {
    this.video.nativeElement.pause()
  }

}
