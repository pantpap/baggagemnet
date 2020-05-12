import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('goBooking', { static: true }) goBooking;

  scrolled = 0;



  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const scrollY = window.scrollY;
    if ( scrollY >= 300) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }

  }


  scrollTo() {
    window.scroll({
      top: 250,
      left: 0,
      behavior: 'smooth'
    });
  }

}
