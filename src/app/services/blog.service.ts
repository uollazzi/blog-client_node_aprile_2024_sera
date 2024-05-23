import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostAddDTO } from '../models/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(environment.SERVER_API_BASE_URL + "/api/blog");
  }

  addPost(post: PostAddDTO) {
    return this.http.post<Post>(environment.SERVER_API_BASE_URL + "/api/blog", post);
  }
}
