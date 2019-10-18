import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Post} from '../../model/Post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private postService: PostService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
      this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
        title: ['', [Validators.required]],
        content: ['', [Validators.required]]
    });
  }

  onSave() {
    this.postService.addPost(new Post(this.postForm.get('title').value,
                                  this.postForm.get('content').value, 0));
    this.router.navigate(['/posts']);
  }
}
