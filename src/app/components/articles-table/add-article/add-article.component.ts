import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";

import { DataService } from '../services/data.service';
import {Article} from "../interfaces/article.interface";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {
  article: FormGroup;

  constructor(
    private dialog: MatDialogRef<AddArticleComponent>,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.article = this.formBuilder.group({
      articleName: this.formBuilder.control('', Validators.required),
      articleWholesaler: this.formBuilder.control('', Validators.required),
      orderedQuantity: this.formBuilder.control('', Validators.required),
      receivedQuantity: this.formBuilder.control('', Validators.required)
    })
  }

  back(): void {
    this.dialog.close();
  }

  add(): void {
    this.dataService.addArticle(this.article.value as Article);
    this.dialog.close();
  }
}
