import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../configs/app-settings.config';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public http: HttpClient) { }

  async getPost(postId: string = null) {

    const id: string = (postId)? postId : '';
    const URL = BASE_URL + "/post/" + id;

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
