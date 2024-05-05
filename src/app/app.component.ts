import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { MindverseCatalogComponent } from './pages/mindverse-catalog/mindverse-catalog.component';
import { MindverseCartComponent } from './components/mindverse-cart/mindverse-cart.component';
import { MatIconModule } from '@angular/material/icon';
import { ICourse } from './interfaces/course.interface';
import { MindverseCreateComponent } from './pages/mindverse-create/mindverse-create.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    MindverseCatalogComponent,
    MindverseCartComponent,
    MatIconModule,
    MindverseCreateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'mindverse';
  addMindverseArray: ICourse[] = [];

  ngOnInit() {
    this.addMindverseArray = JSON.parse(
      localStorage.getItem('addMindverseArray') || '[]'
    );
  }

  findOrAddCourse(course: ICourse) {
    for (let i = 0; i < this.addMindverseArray.length; i++) {
      const currCourse = this.addMindverseArray[i];
      if (course.id === currCourse.id) {
        currCourse.totalAddedToCart =
          course.totalAddedToCart < course.totalInStock
            ? currCourse.totalAddedToCart + 1
            : currCourse.totalAddedToCart;
        return;
      }
    }

    course.totalAddedToCart = 1;
    this.addMindverseArray.push(course);
  }

  addCourseToCart(course: ICourse) {
    this.findOrAddCourse(course);

    this.addMindverseArray = [...this.addMindverseArray];
  }
}
