import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubcription: Subscription;

  constructor(private  postService: PostService, private  router: Router) {
  }

  ngOnInit() {
    this.postSubcription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubcription.unsubscribe();
  }
}
