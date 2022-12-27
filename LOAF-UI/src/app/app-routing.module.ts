import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
