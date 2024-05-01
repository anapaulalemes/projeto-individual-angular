import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindverseCatalogComponent } from './mindverse-catalog.component';

describe('MindverseCatalogComponent', () => {
  let component: MindverseCatalogComponent;
  let fixture: ComponentFixture<MindverseCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindverseCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindverseCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
