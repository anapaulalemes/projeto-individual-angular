import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindverseCartComponent } from './mindverse-cart.component';

describe('MindverseCartComponent', () => {
  let component: MindverseCartComponent;
  let fixture: ComponentFixture<MindverseCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindverseCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindverseCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
