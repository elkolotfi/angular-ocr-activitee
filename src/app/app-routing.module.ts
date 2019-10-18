import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {NewPostComponent} from './new-post/new-post.component';

const routes: Route[] = [
  { path: 'new', component: NewPostComponent },
  { path: 'posts', component: PostListComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts', pathMatch: 'full' }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: []
})
export class AppRoutingModule { }
