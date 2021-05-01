import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  cats: CourseModel[] = [];

  ngOnInit(): void {
  
    this.courseService.getAllCourses().subscribe(
      data => {

        console.log("in Home")
        console.log(data)
        this.cats = data;
      },
      error => {
        console.log(error);
      }
    );

  }

}
