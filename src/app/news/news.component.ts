import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  allNews: Entry<any>[] = [];
  lang: string;

  constructor(
    private contentfulService: ContentfulService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lang = this.router.url.substring(1, 3);
    this.getParagraphs(this.lang);

    this.router.events.subscribe(
      () => {
        this.getParagraphs(this.lang);
      }
    );
  }

  getParagraphs(lang) {
    this.contentfulService.getAllNews(lang)
    .then(news => {
      this.allNews = news;
      // console.log(this.allNews);
    });
  }

  goToDetailPage(workId) {
    this.router.navigate([this.lang + '/details', workId]);
  }

}
