import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CategoryService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private categoryService: CategoryService){}

  categories: Category[];

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  goToDetailPage(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id]);
  }
}
