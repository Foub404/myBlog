import {Component, computed, inject, input, numberAttribute} from '@angular/core';
import {ArticleStore} from '../../article.store';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-article-page',
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  readonly #articleStore = inject(ArticleStore);
  readonly id = input.required({transform: numberAttribute});
  readonly article = computed(() => this.#articleStore.articles().find(article => article.id === this.id()));
}


