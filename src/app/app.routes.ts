import {Routes} from '@angular/router';
import {ArticlePageComponent} from './pages/article-page/article-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {ContactFormComponent} from './Components/contact-form/contact-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'article/:id',
    component: ArticlePageComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
  ]
