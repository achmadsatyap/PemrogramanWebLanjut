import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = '3 Authors';

  angularArray = [
    {id: 0, author: 'author1'},
    {id: 1, author: 'author2'},
    {id: 2, author: 'author3'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
