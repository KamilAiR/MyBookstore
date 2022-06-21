import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDelComponent } from './author-del.component';

describe('AuthorDelComponent', () => {
  let component: AuthorDelComponent;
  let fixture: ComponentFixture<AuthorDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorDelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
