import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course/courses.component';
import { CourseTextComponent } from './course-text/course-text.component';
import { CoursesService } from './course/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
