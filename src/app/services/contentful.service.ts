import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getParagraphs(locale = 'ru', query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'person',
      order: 'sys.createdAt',
      locale: locale
    }, query))
    .then(res => res.items);
  }

  getLessonContent(locale = 'ru', lessonName): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'lessonContent',
      locale: locale
    }, {'fields.title': lessonName}))
    .then(res => res.items[0]);
  }

  getAllNews(locale = 'ru', query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost',
      order: 'sys.createdAt',
      locale: locale
    }, query))
    .then(res => res.items);
  }

  getNews(locale = 'ru', lessonName): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost',
      locale: locale
    }, {'sys.id': lessonName}))
    .then(res => res.items[0]);
  }

}
