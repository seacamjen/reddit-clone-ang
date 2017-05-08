import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [CategoryService, PostService]
})
export class CategoryDetailComponent implements OnInit {
  categoryId: number;
  categoryToDisplay: Category;
  posts: Post[];

  constructor(
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) {}

  goToPostDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['id']);
    });
    this.categoryToDisplay = this.categoryService.getCategoryById(this.categoryId);
  }

}
