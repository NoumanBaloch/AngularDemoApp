import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // courses = [1,2];
  // viewMode = 'map';
  courses;

  loadCourse(){
  this.courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ]
}

trackCourses(course){
  return course ? course.id : undefined;
}
}
