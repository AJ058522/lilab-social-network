import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../configs/app-settings.config';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(public http: HttpClient) { }

  async getComment(postId: string) {

    const URL = BASE_URL + '/post/' + postId + '/comment';

    return new Promise((resolve, reject) => {

      const httpRequest = this.http.get(URL);
      httpRequest.subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });

    });

  }

}
