import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {CourseModel} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService{
  constructor(private http: HttpClient) {
    this.http.get<CourseModel[]>('https://pragra.io/api/course-info').subscribe(
      data => {
        this.courseArray =  data;
        this.courses.next(this.courseArray);
      }
    );
  }
  
  courseArray: CourseModel[] = []

  courses: Subject<CourseModel []> = new Subject<CourseModel[]>();

  seleteCourse: Subject<CourseModel> = new Subject<CourseModel>();

  newCourse: Subject<CourseModel> = new Subject<CourseModel>();

  getAllCourses() : Observable<CourseModel []> {
    return this.courses.asObservable();
  }



  selectCourse(course: CourseModel): void  {
    this.seleteCourse.next(course);
  }

  getSelectedCourse(): Observable<CourseModel>{
    return this.seleteCourse.asObservable();
  }

  addNewCourse(course:  CourseModel) {
    this.courseArray.push(course);
    this.courses.next(this.courseArray);
  }

  getAddCourse(): Observable<CourseModel> {
    return this.newCourse.asObservable();
  }
}
