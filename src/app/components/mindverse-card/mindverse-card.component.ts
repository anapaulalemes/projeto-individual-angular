import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'app-mindverse-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './mindverse-card.component.html',
  styleUrl: './mindverse-card.component.css',
})
export class MindverseCardComponent implements OnInit {
  @Input() course?: ICourse;
  @Input() teste?: string;
  @Output() addCourseToCart: EventEmitter<void> = new EventEmitter();

  addMindverseArray: ICourse[] = [];

  ngOnInit() {
    this.addMindverseArray = JSON.parse(
      localStorage.getItem('addMindverseArray') || '[]'
    );
  }

  findOrAddCourse(course?: ICourse) {
    for (let i = 0; i < this.addMindverseArray.length; i++) {
      const currCourse = this.addMindverseArray[i];
      if (course?.id === currCourse.id) {
        currCourse.totalAddedToCart =
          course.totalAddedToCart < course.totalInStock
            ? currCourse.totalAddedToCart + 1
            : currCourse.totalAddedToCart;
        return;
      }
    }

    if (course) {
      course.totalAddedToCart = 1;
      this.addMindverseArray.push(course);
    }
  }

  addToShoppingCart() {
    this.addCourseToCart.emit();
    this.findOrAddCourse(this.course);

    localStorage.setItem(
      'addMindverseArray',
      JSON.stringify(this.addMindverseArray)
    );
  }
}
