import {Component, Input, OnInit} from '@angular/core';
import {CourseModel} from '../models/course.model';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  @Input()
  course: CourseModel =  {
    courseCode: '',
    courseName: '',
    description: '',
    id: '',
    shortDescription: '',
    thumbnailUrl: '',
    uuid: ''
  } ;

  ngOnInit(): void {
    this.courseService.getSelectedCourse()
      .subscribe(
        data => {
          this.course  = data;
        },
        error => {
          console.log(error);
        }
      );
  }

}
