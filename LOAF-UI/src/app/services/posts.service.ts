import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { PostComment } from '../models/postcomment.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseApiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.baseApiUrl+'/posts');
  }
  createPost(createPostRequest: Post) : Observable<Post> {
    return this.http.post<Post>(this.baseApiUrl+'/posts', createPostRequest);
  }
  getPost(id: string) : Observable<Post>{
    return this.http.get<Post>(this.baseApiUrl + '/posts/' + id);
  }
  getComments(id: string) : Observable<PostComment[]>{
    return this.http.get<PostComment[]>(this.baseApiUrl+'/comments/post/' + id);
  }
  createComment(createCommentRequest: PostComment, id: string) : Observable<PostComment>{
    console.log(createCommentRequest);
    return this.http.post<PostComment>(this.baseApiUrl+'/comments/post/' + id, createCommentRequest);
  }
}