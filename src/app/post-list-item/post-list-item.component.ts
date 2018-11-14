import {Component, OnInit, Input} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() id: number;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onLike(etat) {
    if (etat) {
      this.post.loveIts++;
    } else {
      this.post.loveIts--;
    }
    this.postService.updatePost(this.id, this.post);
  }

  onDeletePost() {
    if (confirm('Voulez-vous vraiment supprimer : ' + this.post.title)) {
      this.postService.removePost(this.id);
    }
  }
}
