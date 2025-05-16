import {Component, NgIterable, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe, DatePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-article-page',
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  articleId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
  }
}
