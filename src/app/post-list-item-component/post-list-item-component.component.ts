import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  like(etat) {
    if (etat)
      this.post.loveIts += 1;
    else
      this.post.loveIts -= 1;
  }
}
