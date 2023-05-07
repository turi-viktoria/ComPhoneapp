import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginSideComponent } from './after-login-side.component';

describe('AfterLoginSideComponent', () => {
  let component: AfterLoginSideComponent;
  let fixture: ComponentFixture<AfterLoginSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterLoginSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterLoginSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
