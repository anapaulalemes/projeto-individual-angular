import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindverseCreateComponent } from './mindverse-create.component';

describe('MindverseCreateComponent', () => {
  let component: MindverseCreateComponent;
  let fixture: ComponentFixture<MindverseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindverseCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindverseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
