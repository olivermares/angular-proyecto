import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDropComponent } from './character-drop.component';

describe('CharacterDropComponent', () => {
  let component: CharacterDropComponent;
  let fixture: ComponentFixture<CharacterDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDropComponent]
    });
    fixture = TestBed.createComponent(CharacterDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
