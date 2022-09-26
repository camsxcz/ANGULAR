import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogss:Blog[] = [];

  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    this.blogss = this.blogService.displayBlog();
  }

  editButton(id:number){

  }

  deleteButton(id:number){

  }

}
