import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onDelete() {
    if (confirm('Vous êtes sur de bien vouloir supprimer ce post?')) {
      this.postService.removePost(this.post);
    }
  }

  onLoveIt() {
    this.postService.loveIt(this.post);
  }

  onDontLoveIt() {
    this.postService.dontLoveIt(this.post);
  }
}
