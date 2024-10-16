import { Component } from '@angular/core';
import {Article} from "../models/Article";
import {ARTICLES} from "../../assets/ms-and-ai-articles";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ms-and-ai',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ms-and-ai.component.html',
  styleUrl: './ms-and-ai.component.css'
})
export class MsAndAiComponent {
  articles: Article[] = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.articles = ARTICLES;
  }
}
