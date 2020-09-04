import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../../core/services/posts.service';
import { PostModel } from '../../../../shared/models/post-model';
import { UserModel } from '../../../../shared/models/user-model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsList: Array<PostModel>[] = [];
  userModal: boolean = false;
  userData: UserModel;

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

  showUserModal(userData: UserModel){

    this.userData = userData;
    this.userModal = true;
  }

  closeUserModal(){
    this.userModal = false;
  }

  filterByTag(tag: any){

    console.log(tag);
  }

}
