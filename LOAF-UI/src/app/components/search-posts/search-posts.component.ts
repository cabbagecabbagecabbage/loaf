import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css']
})
export class SearchPostsComponent {
  searchQuery = '';
  searchResults: Post[] = [];

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  searchPosts() {
    // this.postsService.searchPosts(this.searchQuery).subscribe(posts => {
    //   this.searchResults = posts;
    // });
  }
}
