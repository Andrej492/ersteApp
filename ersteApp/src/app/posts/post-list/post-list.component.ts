import { Component } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  // posts = [
  //   {title: 'First-Post', content: 'This is a 1st post!'},
  //   {title: 'Second-Post', content: 'This is a 2nd post!'},
  //   {title: 'Third-Post', content: 'This is a 3rd post!'}
  // ];

  posts = [];
}
