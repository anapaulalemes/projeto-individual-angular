import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindverseCardComponent } from './mindverse-card.component';

describe('MindverseCardComponent', () => {
  let component: MindverseCardComponent;
  let fixture: ComponentFixture<MindverseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindverseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindverseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
