import {Injectable} from '@angular/core';
import {Post} from '../../model/Post';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
  }

  removePost(post: Post) {
    const removeIndex = this.posts.findIndex((postDel) => {
      if (postDel === post) {
        return true;
      }
    });
    this.posts.splice(removeIndex, 1);
    this.savePosts();
  }

  loveIt(post: Post) {
    const postIndex = this.posts.findIndex((findPost: Post) => {
      if (post === findPost) { return true; }
    });

    this.posts[postIndex].loveIt++;
    this.savePosts();
  }

  dontLoveIt(post: Post) {
      const postIndex = this.posts.findIndex((findPost: Post) => {
        if (post === findPost) { return true; }
      });
      this.posts[postIndex].loveIt--;
      this.savePosts();
  }

  savePosts() {
    firebase.database().ref('posts').set(this.posts).then(() => this.emitPost());
  }

  private getPosts() {
    firebase.database().ref('posts').on('value', (data: DataSnapshot) => {
      this.posts = [];
      // Format firebase returned objects to Post instances
      if (data.val()) {
        data.val().forEach(p => {
          this.posts.push(Post.format(p));
        });
      }
      this.emitPost();
    });
  }

  emitPost() {
    this.postSubject.next(this.posts);
  }
}
