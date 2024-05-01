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

  constructor() {
    console.log(this.course);
    console.log(this.teste);
  }

  ngOnInit() {
    console.log(this.course);
    console.log(this.teste);
  }

  addToShoppingCart() {
    this.addCourseToCart.emit();
  }
}
