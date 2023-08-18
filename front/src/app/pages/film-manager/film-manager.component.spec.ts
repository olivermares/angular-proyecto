import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmManagerComponent } from './film-manager.component';

describe('FilmManagerComponent', () => {
  let component: FilmManagerComponent;
  let fixture: ComponentFixture<FilmManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmManagerComponent]
    });
    fixture = TestBed.createComponent(FilmManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
