import { Component } from '@angular/core';
import {Article} from "../models/Article";
import { CommonModule } from '@angular/common';
import {ARTICLES} from "../../assets/articles";

@Component({
  selector: 'app-ai4ms-slr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai4ms-slr.component.html',
  styleUrl: './ai4ms-slr.component.css'
})
export class Ai4msSlrComponent {

  articles: Article[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.articles = ARTICLES;
  }

}
