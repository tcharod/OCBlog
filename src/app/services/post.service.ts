import {Injectable} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];

  postSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  updatePost(id: number, post: Post) {
    firebase.database().ref('/posts/' + id).set(post);
    this.emitPosts();
  }

  removePost(id: number) {
    this.posts.splice(id, 1);
    this.savePosts();
    this.emitPosts();
  }
}
