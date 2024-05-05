import { Routes } from '@angular/router';
import { MindverseCatalogComponent } from './pages/mindverse-catalog/mindverse-catalog.component';
import { MindverseCreateComponent } from './pages/mindverse-create/mindverse-create.component';

export const routes: Routes = [
  { path: '', component: MindverseCatalogComponent },
  { path: 'mindverse/create', component: MindverseCreateComponent },
];
