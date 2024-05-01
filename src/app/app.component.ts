import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { MindverseCatalogComponent } from './pages/mindverse-catalog/mindverse-catalog.component';
import { MindverseCartComponent } from './components/mindverse-cart/mindverse-cart.component';
import { MatIconModule } from '@angular/material/icon';
import { ICourse } from './interfaces/course.interface';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mindverse';
  addMindverseArray: ICourse[] = [];

  findOrAddCourse(course: ICourse) {
    for (let i = 0; i < this.addMindverseArray.length; i++) {
      if (course.id === this.addMindverseArray[i].id) {
        this.addMindverseArray[i].totalAddedToCart++;
        return;
      }
    }

    course.totalAddedToCart = 1;
    this.addMindverseArray.push(course);
  }

  addCourseToCart(course: ICourse) {
    this.findOrAddCourse(course);

    this.addMindverseArray = [...this.addMindverseArray];

    console.log(this.addMindverseArray);
  }
}
