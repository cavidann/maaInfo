import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  lang: string;
  allParagraphs: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.lang = this.router.url.substring(1, 3);
    this.getParagraphs(this.lang);

    this.router.events.subscribe(
      () => {
        this.lang = this.router.url.substring(1, 3);
        this.getParagraphs(this.lang);
        // console.log(this.router.url);
      }
    );
  }

  getParagraphs(lang) {
    this.contentfulService.getParagraphs(lang)
    .then(paragraph => {
      this.allParagraphs = paragraph;
      // console.log(this.allParagraphs);
    });
  }

}
