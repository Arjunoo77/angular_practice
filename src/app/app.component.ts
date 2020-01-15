import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';
  courses = [
    { id: 1, name: "Name1" },
    { id: 2, name: "Name2" },
    { id: 3, name: "Name3" },
  ];
  viewMode = 'list';
  onAdd() {
    this.courses.push({ id: 4, name: "Name4" })
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
