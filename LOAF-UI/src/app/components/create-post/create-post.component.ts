import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  createPostRequest: Post = {
    "id": 0,
    "title": "",
    "content": "",
    "tag": "",
    "date": "",
  }
  constructor (private postsService: PostsService, private router: Router) {}
  ngOnInit(): void {
  }

  createPost() {
    console.log(this.createPostRequest);
    this.postsService.createPost(this.createPostRequest).subscribe({
      next: (post) => {
        this.router.navigate(['/']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
