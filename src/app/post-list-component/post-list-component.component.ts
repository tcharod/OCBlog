import { Component, OnInit } from '@angular/core';
import { POSTS } from '../app.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

}
