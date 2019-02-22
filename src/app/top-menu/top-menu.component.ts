import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  defaultLang: string;
  lang: string;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.setDefaultLang();
  }

  ngOnInit() {
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.router.navigate([lang + '/home']);
  }

  setDefaultLang() {
    this.router.events.subscribe(
      () => {
        this.lang = this.router.url.substring(1, 3);
        this.defaultLang = this.router.url.substring(1, 3);
        if (this.defaultLang.length > 0) {
          // this language will be used as a fallback when a translation isn't found in the current language
          this.translate.setDefaultLang(this.defaultLang);

            // the lang to use, if the lang isn't available, it will use the current loader to get them
          this.translate.use(this.defaultLang);
        }
      }
    );
  }

}
