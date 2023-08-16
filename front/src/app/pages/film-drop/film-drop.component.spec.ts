import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDropComponent } from './film-drop.component';

describe('FilmDropComponent', () => {
  let component: FilmDropComponent;
  let fixture: ComponentFixture<FilmDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDropComponent]
    });
    fixture = TestBed.createComponent(FilmDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
