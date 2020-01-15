import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  getCourses() {
    return ["Author1", "Author2", "Author3"];
  }
}
