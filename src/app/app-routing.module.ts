import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './course-form/course-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "" , component: HomeComponent, pathMatch: 'full'
  }, 
  {
    path: 'addcourse', component: CourseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
