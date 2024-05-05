import { Component, OnInit } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ICourse } from '../../interfaces/course.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mindverse-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './mindverse-create.component.html',
  styleUrl: './mindverse-create.component.css',
})
export class MindverseCreateComponent implements OnInit {
  mindverseArray: ICourse[] = [];

  newCourse: ICourse = {
    id: 2,
    title: '',
    author: 'Ana',
    description: '',
    img: '',
    publishedDate: new Date('2024-01-05'),
    price: 59.99,
    totalInStock: 20,
    totalAddedToCart: 0,
  };
  ngOnInit() {
    this.mindverseArray = JSON.parse(
      localStorage.getItem('mindverseArray') || '[]'
    );
  }
  submitForm() {
    this.mindverseArray.push(this.newCourse);
    localStorage.setItem('mindverseArray', JSON.stringify(this.mindverseArray));
  }
}

// import { Component, OnInit } from '@angular/core';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatButtonModule } from '@angular/material/button';
// import { provideNativeDateAdapter } from '@angular/material/core';
// import { ICourse } from '../../interfaces/course.interface';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-mindverse-create',
//   standalone: true,
//   imports: [
//     MatFormFieldModule,
//     MatInputModule,
//     MatDatepickerModule,
//     MatButtonModule,
//     ReactiveFormsModule,
//   ],
//   providers: [provideNativeDateAdapter()],
//   templateUrl: './mindverse-create.component.html',
//   styleUrl: './mindverse-create.component.css',
// })
// export class MindverseCreateComponent implements OnInit {
//   mindverseArray: ICourse[] = [];
//   mindverseForm: FormGroup;

//   constructor() {
//     this.mindverseForm = new FormGroup({
//       title: new FormControl('Título padrão'),
//       author: new FormControl(),
//       description: new FormControl(),
//       publishedDate: new FormControl(),
//       price: new FormControl(),
//       totalInStock: new FormControl(),
//     });
//   }
//   ngOnInit() {
//     this.mindverseArray = JSON.parse(
//       localStorage.getItem('mindverseArray') || '[]'
//     );
//   }
//   submitForm() {
//     const newCourse: ICourse = this.mindverseForm.value;
//     this.mindverseArray.push(newCourse);
//     localStorage.setItem('mindverseArray', JSON.stringify(this.mindverseArray));
//   }
// }
