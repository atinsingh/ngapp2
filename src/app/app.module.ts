import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseService} from './services/course.service';
import {HttpClientModule} from '@angular/common/http';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CourseGridComponent,
    CourseCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
