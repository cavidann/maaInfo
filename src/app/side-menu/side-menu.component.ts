import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  lang: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.lang = this.router.url.substring(0, 3);

    this.router.events.subscribe(
      () => {
        this.lang = this.router.url.substring(0, 3);
        console.log(this.lang);
      }
    );
  }

}
