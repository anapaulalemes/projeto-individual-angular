import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ICourse } from '../../interfaces/course.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mindverse-cart',
  standalone: true,
  imports: [MatDividerModule, MatListModule, MatButtonModule],
  templateUrl: './mindverse-cart.component.html',
  styleUrl: './mindverse-cart.component.css',
})
export class MindverseCartComponent implements OnInit, OnChanges {
  @Input('mindverseArray') addMindverseArray: ICourse[] = [];

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    localStorage.setItem(
      'addMindverseArray',
      JSON.stringify(this.addMindverseArray)
    );
  }

  removeCourseFromCart(course: ICourse) {
    const courseIndex = this.addMindverseArray.findIndex((currCourse) => {
      return currCourse.id === course.id;
    });
    this.addMindverseArray.splice(courseIndex, 1);
  }

  incrementTotalCourseCopies(course: ICourse) {
    course.totalAddedToCart++;

    if (course.totalAddedToCart > course.totalInStock) {
      course.totalAddedToCart = course.totalInStock;
    }

    localStorage.setItem(
      'addMindverseArray',
      JSON.stringify(this.addMindverseArray)
    );
  }

  decrementTotalCourseCopies(course: ICourse) {
    course.totalAddedToCart--;

    if (course.totalAddedToCart <= 0) {
      this.removeCourseFromCart(course);
    }

    localStorage.setItem(
      'addMindverseArray',
      JSON.stringify(this.addMindverseArray)
    );
  }
}
