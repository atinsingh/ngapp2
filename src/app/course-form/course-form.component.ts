import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  constructor(private router: Router, private courseService: CourseService) { }
  courseData: CourseModel = {
    id: '',
    courseCode: '',
    courseName:'',
    uuid: '',
    description:'',
    shortDescription: '',
    thumbnailUrl:''
  }
; 
  ngOnInit(): void {
  }

  submitForm(event : any){
    event.preventDefault();
    console.log(this.courseData)

    if(this.courseData.courseName==='' 
    ||this.courseData.courseCode==='' 
    ||this.courseData.description ===''
    || this.courseData.thumbnailUrl===''
    )return;

    this.courseService.addNewCourse(this.courseData);
    this.router.navigate(["/"])
  }
}
