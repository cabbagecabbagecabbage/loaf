import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  postResponse : Post = {
    "id": 0,
    "title": "",
    "content": "",
    "tag": "",
    "date": "",
  }

  constructor(private route: ActivatedRoute, private postService: PostsService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id =  params.get('id');
        if (id) {
          this.postService.getPost(id).subscribe({
            next: (response) => {
              this.postResponse = response;
            }
          })
        }
      }
    })
  }
}
