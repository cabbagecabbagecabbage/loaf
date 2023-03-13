import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent{
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() : void {
    this.postsService.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts.reverse();
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
  onSearchResults(results: Post[]) {
    this.posts = results;
  }
}