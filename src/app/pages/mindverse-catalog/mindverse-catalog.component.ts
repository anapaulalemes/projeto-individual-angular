import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MindverseCardComponent } from '../../components/mindverse-card/mindverse-card.component';
import { ICourse } from '../../interfaces/course.interface';

@Component({
  selector: 'app-mindverse-catalog',
  standalone: true,
  imports: [NgFor, NgIf, MindverseCardComponent],
  templateUrl: './mindverse-catalog.component.html',
  styleUrl: './mindverse-catalog.component.css',
})
export class MindverseCatalogComponent {
  @Output() addCourseToCart: EventEmitter<ICourse> = new EventEmitter();
  mindverseArray: ICourse[] = [
    {
      id: 1,
      title: 'O Silêncio dos Inocentes',
      author: 'Thomas Harris',
      description: 'Um livro muito legal...',
      published_date: new Date('1988-08-29'),
      price: 59.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 2,
      title: 'Harry Potter e a Ordem da Fênix',
      author: 'J.K. Rowling',
      description: 'Um livro muito legal...',
      published_date: new Date('1988-08-29'),
      price: 59.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 3,
      title: 'Jogo dos Tronos',
      author: 'George R.R. Martin',
      description: 'Um livro muito legal...',
      published_date: new Date('1988-08-29'),
      price: 59.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
    {
      id: 4,
      title: 'Hábitos Atômicos',
      author: 'James Clear',
      description: 'Um livro muito legal...',
      published_date: new Date('1988-08-29'),
      price: 39.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },
  ];

  warnAboutAddCourseToCart(course: ICourse) {
    console.log('teste 1');
    this.addCourseToCart.emit(course);
  }
}
