import { UserModel } from './user-model';

export interface PostModel {
    "owner": UserModel,
    "id": string,
    "image": string,
    "publishDate": string,
    "text": string,
    "tags": Array<string>,
    "link": string,
    "likes": number
}
