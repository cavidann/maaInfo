import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  id: string;
  isOpen: boolean;
  lesson:  Entry<any>;
  lang: string;
  isParagraphSelected: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.isOpen = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.lang = this.router.url.substring(1, 3);
    this.getLesson(this.lang, this.id);

    this.checkParagraphLink();

    this.router.events.subscribe(
      () => {
        this.id = this.route.snapshot.paramMap.get('id');
        this.isOpen = false;

        this.lang = this.router.url.substring(1, 3);
        this.getLesson(this.lang, this.id);
        this.checkParagraphLink();

      }
    );
  }

  setCondition() {
    this.isOpen = !this.isOpen;
  }

  getLesson(lang, name) {
    this.contentfulService.getLessonContent(lang, name)
    .then(lesson => {
      this.lesson = lesson;
      // console.log(this.lesson.fields.title);
    });
  }

  checkParagraphLink() {
    if (this.router.url !== '/' + this.lang + '/paragraph/learn') {
      // console.log(this.router.url);
      this.isParagraphSelected = true;
    } else {
      this.isParagraphSelected = false;
    }
  }

}
