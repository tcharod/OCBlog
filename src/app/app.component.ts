import {Component} from '@angular/core';
import {Post} from './models/Post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OCBlog';

  constructor() {
    const config = {
      apiKey: "AIzaSyCj2vhvjNUzxoEhLAWvzMPKKuUnTdMNmxI",
      authDomain: "coursoc-72bd1.firebaseapp.com",
      databaseURL: "https://coursoc-72bd1.firebaseio.com",
      projectId: "coursoc-72bd1",
      storageBucket: "coursoc-72bd1.appspot.com",
      messagingSenderId: "986904214746"
    };
    firebase.initializeApp(config);
  }
}
