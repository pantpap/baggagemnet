import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Baggagement';
  translateService;
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'gr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|gr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.translateService = this.translate;
  }
}
