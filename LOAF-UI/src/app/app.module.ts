import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { ViewPostComponent } from './components/view-post/view-post.component';

import { MathjaxModule } from "mathjax-angular";
import { SearchPostsComponent } from './components/search-posts/search-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    CreatePostComponent,
    ViewPostComponent,
    SearchPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MathjaxModule.forRoot(/*Optional Config*/)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


