import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: Posts[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => this.posts = posts);
  }

  ngDoCheck(): void {
    console.log('posts', this.posts);
  }

}
