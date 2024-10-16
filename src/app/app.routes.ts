import { Routes } from '@angular/router';
import {Ai4msSlrComponent} from "./ai4ms-slr/ai4ms-slr.component";
import {MsAndAiComponent} from "./ms-and-ai/ms-and-ai.component";

export const routes: Routes = [{
  path: '',
  redirectTo: '/ai4ms-slr',
  pathMatch: 'full'
}, {
  path: 'ai4ms-slr',
  component: Ai4msSlrComponent
}, {
  path: 'ms-and-ai',
  component: MsAndAiComponent
}];
