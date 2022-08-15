import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTextComponent } from './course-text.component';

describe('CourseTextComponent', () => {
  let component: CourseTextComponent;
  let fixture: ComponentFixture<CourseTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
