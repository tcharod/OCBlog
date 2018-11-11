import { Component } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OCBlog';
}

export const POSTS: Post[] = [
  new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula in diam egestas ornare ultricies nec ex. Phasellus ullamcorper dolor lacinia, vehicula augue vitae, cursus mauris.tra, per inceptos himenaeos. Nam placerat quam et accumsan maximus.'),
  new Post('Mon secon post', 'Lorem ipsum dolor sit amet, Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam placerat quam et accumsan maximus.'),
  new Post('Un troisieme post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula in diam egestas ornare ultricies nec ex. Phasellus ullamcorper dolor lacinia, vehicula augue vitae, cursus mauris. Class aptent taciti sociosqu ad litora.'),
  new Post('Est un autre post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula in diam egestas ornare ultricies nec ex. Phasellus ullamcorper dolor lacinia, vehicula augue vitae, cursus mauris. Class aptent taciti sociosqu.')
];
