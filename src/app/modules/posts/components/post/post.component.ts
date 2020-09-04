import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostModel } from '../../../../shared/models/post-model';
import { UserModel } from '../../../../shared/models/user-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: PostModel;
  @Output() authorData = new EventEmitter<UserModel>();

  constructor() { }

  ngOnInit(): void {}

  showAuthor(author: UserModel){
    
    this.authorData.emit(author);
  }

}
