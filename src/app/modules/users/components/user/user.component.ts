import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserModel } from '../../../../shared/models/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {

  @Input('userData') userData: UserModel;
  user: UserModel;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    if( this.userData ){
      this.user = this.userData;
    }
  }

}
