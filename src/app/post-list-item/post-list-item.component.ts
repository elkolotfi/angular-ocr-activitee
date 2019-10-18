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
    this.postService.removePost(this.post);
  }

  onLoveIt() {
    this.post.loveIt += 1;
  }

  onDontLoveIt() {
    this.post.loveIt -= 1;
  }
}
