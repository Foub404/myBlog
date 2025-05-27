import {Component} from '@angular/core';
import {ArticleListComponent} from '../../Components/article-list-component/article-list-component.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [
    ArticleListComponent,
  ],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
