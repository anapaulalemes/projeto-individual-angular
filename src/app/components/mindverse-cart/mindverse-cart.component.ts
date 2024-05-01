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

@Component({
  selector: 'app-mindverse-cart',
  standalone: true,
  imports: [MatDividerModule, MatListModule],
  templateUrl: './mindverse-cart.component.html',
  styleUrl: './mindverse-cart.component.css',
})
export class MindverseCartComponent implements OnInit, OnChanges {
  @Input('mindverseArray') addMindverseArray: ICourse[] = [];

  ngOnInit() {
    console.log(this.addMindverseArray);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.addMindverseArray);
  }
}
