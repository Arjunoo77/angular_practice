import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  template: `
  <h2>{{ getTitle() }}</h2>
  <ul>
  <li *ngFor="let courses of course">{{courses}}</li>
  </ul>
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `
})
export class CoursesComponent implements OnInit {

  title = "This is new TITLE"
  // course = ["Author1", "Author2", "Author3"];
  course;
  email = "test@gmail.com";

  onKeyUp() {
    console.log(this.email);
  }

  onKeyPress() {
    console.log(this.email);
  }
  constructor(service: CourseServiceService) {
    this.course = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
  ngOnInit() {
  }


}
