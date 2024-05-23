import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private blogService: BlogService) {

  }

  ngOnInit(): void {
    this.blogService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
}
