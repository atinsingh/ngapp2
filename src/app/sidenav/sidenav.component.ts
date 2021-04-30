import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {CourseModel} from '../models/course.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input()
  navItems: CourseModel [] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

  }

  updateSelection(nav : CourseModel) {
    this.courseService.selectCourse(nav);
  }
}
