import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommentsService } from '../../../../core/services/comments.service';
import { CommentModel } from '../../../../shared/models/comment-model';
import { PostModel } from '../../../../shared/models/post-model';
import { UserModel } from '../../../../shared/models/user-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnChanges{

  @Input('post') post: PostModel;
  @Output() authorData = new EventEmitter<UserModel>();
  @Output() tag = new EventEmitter<string>();
  totalComents: number = 0;
  comentsList: Array<CommentModel>[] = [];
  commentModal: boolean = false;

  constructor(private commentsService: CommentsService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if( this.post ){
      this.getComment(this.post.id);
    }
  }

  getComment(postId: string) {

    this.commentsService.getComment(postId)
      .then(data => {
        const response: any = data;
        this.comentsList = response.data;
        this.totalComents = this.comentsList.length;
      },
        error => {
        });

  }

  showAuthor(author: UserModel){
    
    this.authorData.emit(author);
  }

  selectTag(tag: string){
    
    this.tag.emit(tag);
  }

  showComents(){
    
    this.commentModal = true;    
  }

  closeCommentModal(){
    
    this.commentModal = false;
  }

}
