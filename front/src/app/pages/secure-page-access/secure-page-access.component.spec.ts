import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurePageAccessComponent } from './secure-page-access.component';

describe('SecurePageAccessComponent', () => {
  let component: SecurePageAccessComponent;
  let fixture: ComponentFixture<SecurePageAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurePageAccessComponent]
    });
    fixture = TestBed.createComponent(SecurePageAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
