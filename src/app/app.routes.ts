import { Routes } from '@angular/router';
import {Ai4msSlrComponent} from "./ai4ms-slr/ai4ms-slr.component";

export const routes: Routes = [{
  path: '',
  redirectTo: '/ai4ms-slr',
  pathMatch: 'full'
}, {
  path: 'ai4ms-slr',
  component: Ai4msSlrComponent
}];
