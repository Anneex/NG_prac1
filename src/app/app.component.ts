import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';
import { PostModel } from 'src/models/PostModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // <app-user *ngFor="let u of users" [user]="u"></app-user>
  // <br>
  //   <app-post *ngFor="let p of posts" [post]="p"></app-post>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {

  }
}
