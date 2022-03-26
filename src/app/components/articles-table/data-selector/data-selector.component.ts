import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl} from "@angular/forms";

import {DialogData} from "../interfaces/dialog-data.interface";
import {DataService} from "../services/data.service";
import {Article} from "../interfaces/article.interface";

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.scss']
})
export class DataSelectorComponent implements OnInit {
  articleList: Article[] = [];
  article: FormControl;

  constructor(
    private dialog: MatDialogRef<DataSelectorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.article = this.formBuilder.control(this.data.article);
  }

  ngOnInit(): void {
    this.dataService.getArticles$()
      .subscribe( articles => this.articleList = articles);
  }

  back(): void {
    this.dialog.close();
  }

  confirmArticle(): void {
    this.dataService.setSelectedArticle(this.article.value);
    this.dialog.close();
  }
}
