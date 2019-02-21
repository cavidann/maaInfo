import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  lang: string;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('az');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('az');
  }

  ngOnInit() {
    this.lang = this.router.url.substring(0, 3);

    this.router.events.subscribe(
      () => {
        this.lang = this.router.url.substring(0, 3);
        console.log(this.lang);
      }
    );
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    const url = this.router.url.substring(3);
    // console.log(lang+url);
    this.router.navigate([lang + url]);
  }

}
