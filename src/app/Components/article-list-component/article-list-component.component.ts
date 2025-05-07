import {Component, inject} from '@angular/core';
import {Article} from '../../models/article.models.component';
import {DatePipe, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-article-list-component',
  imports: [
    DatePipe,
    SlicePipe
  ],
  templateUrl: './article-list-component.component.html',
  styleUrl: './article-list-component.component.scss'
})
export class ArticleListComponent {
  article: Article = {
    title: 'Titre de l\'article',
    content: 'Voici le contenu de l\'article.',
    image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished: true,
    likeCount: 123,
    categoryName: 'Angular',
  };
}
