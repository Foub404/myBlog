import {Component, inject} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {ArticleStore} from '../../article.store';

@Component({
  selector: 'app-article-list-component',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './article-list-component.component.html',
  styleUrl: './article-list-component.component.scss'
})
export class ArticleListComponent {
 readonly #articleStore = inject(ArticleStore);
 readonly articles = this.#articleStore.articles;
  }
