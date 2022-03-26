import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

import { DataService } from "./services/data.service";
import { Article } from "./interfaces/article.interface";
import { mockArticleOne } from './mocks/mock-article';
import { DataSelectorComponent } from "./data-selector/data-selector.component";
import { AddArticleComponent } from "./add-article/add-article.component";

@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss']
})
export class ArticlesTableComponent implements OnInit {
  articleDisplayed: Article = mockArticleOne;

  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataService.getSelectedArticle$()
      .subscribe( article => this.articleDisplayed = article);
  }

  addArticle(): void {
    this.dialog.open(AddArticleComponent, {
      width: '40rem',
      height: '23rem',
      disableClose: true,
      autoFocus: true
    });
  }

  selectArticle(): void {
    this.dialog.open(DataSelectorComponent, {
      width: '20rem',
      height: '15rem',
      disableClose: true,
      autoFocus: true,
      data: {
        article: this.articleDisplayed
      }
    });
  }
}
