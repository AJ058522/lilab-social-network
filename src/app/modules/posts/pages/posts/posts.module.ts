import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostComponent } from '../../components/post/post.component';
import { UserComponent } from '../../../users/components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: '',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [PostsComponent, PostComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
