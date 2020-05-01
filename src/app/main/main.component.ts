import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  url = 'http://baggagement.com/book/?widget';
  urlSafe: SafeResourceUrl;
  @ViewChild('engine', { static: true }) engine;
  @ViewChild('main', { static: true }) main;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.engine);
  }

  scrollTo() {
    window.scroll({
      top: 250,
      left: 0,
      behavior: 'smooth'
    });
  }

}
