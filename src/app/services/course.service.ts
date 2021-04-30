import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {CourseModel} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService{
  constructor(private http: HttpClient) {
  }

  seleteCourse: Subject<CourseModel> = new Subject<CourseModel>();

  getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>('https://pragra.io/api/course-info');
  }

  selectCourse(course: CourseModel): void  {
    this.seleteCourse.next(course);
  }

  getSelectedCourse(): Observable<CourseModel>{
    return this.seleteCourse.asObservable();
  }
}
