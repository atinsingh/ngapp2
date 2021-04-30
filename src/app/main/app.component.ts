import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {CourseModel} from '../models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private courseService: CourseService) {
  }

  title = 'servicedemodelete';
  cats: CourseModel[] = [];

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      data => {
        console.log(data);
        this.cats = data;

      },
      error => {
        console.log(error);
      }
    )
  }


}
