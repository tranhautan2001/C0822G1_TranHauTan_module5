import {Component, OnInit} from '@angular/core';

import {DictionaryService} from "../service/dictionary-service.service";
import {Iword} from "../model/iword";


@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {

  words: Iword[] = [];

  constructor(private dictionaryService: DictionaryService) {

  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.words = this.dictionaryService.getAll();
  }
}
