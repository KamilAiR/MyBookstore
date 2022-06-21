import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDelComponent } from './book-del.component';

describe('BookDelComponent', () => {
  let component: BookDelComponent;
  let fixture: ComponentFixture<BookDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
