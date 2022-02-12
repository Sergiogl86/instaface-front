import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstafaceLoginComponent } from './instaface-login.component';

describe('InstafaceLoginComponent', () => {
  let component: InstafaceLoginComponent;
  let fixture: ComponentFixture<InstafaceLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstafaceLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstafaceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
