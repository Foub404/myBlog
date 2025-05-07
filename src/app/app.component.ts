import { Component } from '@angular/core';
import {HeaderComponent} from './Components/header/header.component';
import {ArticleListComponent} from './Components/article-list-component/article-list-component.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ArticleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myBlog';
}
