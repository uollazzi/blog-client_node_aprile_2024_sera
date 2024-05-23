import { Component } from '@angular/core';
import { PostAddDTO } from '../../models/post';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  model: PostAddDTO = {
    title: "",
    author: "",
    body: "",
    hidden: false
  }

  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  salva() {
    this.blogService.addPost(this.model)
      .subscribe(post => {
        console.log(post);
        this.router.navigate(["/"]);
      });
  }
}
