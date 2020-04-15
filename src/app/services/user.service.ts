import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/UserModel';
import {Observable} from 'rxjs';
import { PostModel } from 'src/models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
