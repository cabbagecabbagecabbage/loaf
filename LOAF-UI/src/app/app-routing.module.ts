import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { SearchPostsComponent } from './components/search-posts/search-posts.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: "",
    component: PostsListComponent
  },
  {
    path: "post",
    component: CreatePostComponent
  },
  {
    path: "posts/:id",
    component: ViewPostComponent
  },
  {
    path: "search",
    component: SearchPostsComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
