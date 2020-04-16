import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  translateService;
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translateService = this.translate;
  }

}
