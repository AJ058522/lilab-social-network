import { UserModel } from './user-model';

export interface CommentModel {
    "owner": UserModel,
    "id": string,
    "message": string,
    "publishDate": string
}
