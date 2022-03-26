import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable } from "rxjs";

import { Article } from "../interfaces/article.interface";
import { mockArticleOne, mockArticleThree, mockArticleTwo } from "../mocks/mock-article";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedArticle = new BehaviorSubject<Article>(mockArticleOne);
  private articles: BehaviorSubject<Article[]> = new BehaviorSubject([mockArticleOne, mockArticleTwo, mockArticleThree]);

  getArticles$(): Observable<Article[]> {
    return this.articles;
  }

  getSelectedArticle$(): Observable<Article> {
    return this.selectedArticle;
  }

  setSelectedArticle(article: Article): void {
    this.selectedArticle.next(article);
  }

  addArticle(article: Article): void {
    this.articles.value.push(article);
  }
}
