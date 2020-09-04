import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../../core/services/posts.service';
import { PostModel } from '../../../../shared/models/post-model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList: Array<PostModel>[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {

    this.getPost();
  }

  getPost() {

    this.postsService.getPost()
      .then(data => {
        const response: any = data;
        this.postsList = response.data;
      },
        error => {
        });

  }

  showUserModal(data: any){

    console.log(data);
  }

}
