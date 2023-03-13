import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { Post } from 'src/app/models/post.model';
import { PostComment } from 'src/app/models/postcomment.model';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  createCommentRequest : PostComment = {
    "id": 0,
    "postId": 0,
    "content": "",
    "date": "",
  };

  createComment() {
    this.createCommentRequest.content = this.createCommentRequest.content.trim();
    console.log(this.createCommentRequest);
    if (this.createCommentRequest.content.length == 0) return;
    this.postsService.createComment(this.createCommentRequest, String(this.postResponse.id)).subscribe({
      next: (post) => {
        // this.router.navigate(['/posts/'+this.postResponse.id]);
        // reload so the user can see changes
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/posts/${this.postResponse.id}`]);
        });
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  
  postResponse : Post = {
    "id": 0,
    "title": "",
    "content": "",
    "tag": "",
    "date": "",
    "replies": 0,
  };

  commentsResponse: PostComment[] = [];

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id =  params.get('id');
        if (id) {
          this.postsService.getPost(id).subscribe({
            next: (response) => {
              this.postResponse = response;
            }
          });
          this.postsService.getComments(id).subscribe({
            next: (comments) => {
              console.log(typeof(comments));
              this.commentsResponse = comments;
              console.log(this.commentsResponse);
            }
          });
        }
      }
    })
  }
}
