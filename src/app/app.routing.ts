import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);