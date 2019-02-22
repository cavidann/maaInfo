import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

import { RemovewhitespacesPipe } from './pipes/removewhitespaces.pipe';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'az/home', pathMatch: 'full' },
  { path: ':lang/home', component: HomeComponent},
  { path: ':lang/paragraph', children: [
    { path: '', redirectTo: 'learn', pathMatch: 'full' },
    { path: 'learn', component: ParagraphComponent },
    { path: ':id', component: ParagraphComponent}
  ]},
  { path: ':lang/news', component: NewsComponent },
  { path: ':lang/details/:id', component: DetailsComponent },
  { path: 'contactus', component: ContactComponent, outlet: 'popup'}
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    FooterComponent,
    ParagraphComponent,
    HomeComponent,
    ContactComponent,
    RemovewhitespacesPipe,
    MdToHtmlPipe,
    NewsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
