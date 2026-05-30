import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Article} from '@shared/models/Content.model';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'mrf-most-read-article',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './most-read-article.html',
  styleUrl: './most-read-article.scss',
})
export class MostReadArticle {

  // Data always provided by BlogIndexComponent
  @Input() mostReadArticles: Article[] = [];

}
