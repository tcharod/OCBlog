import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postFrom: FormGroup;

  constructor(private formbuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postFrom = this.formbuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSavePost() {
    const title = this.postFrom.get('title').value;
    const content = this.postFrom.get('content').value;
    const post = new Post(title, content);
    this.postService.createNewPost(post);
    this.router.navigate(['/posts']);
  }
}
