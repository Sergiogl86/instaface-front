import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstafaceUserComponent } from './instaface-user.component';

describe('InstafaceUserComponent', () => {
  let component: InstafaceUserComponent;
  let fixture: ComponentFixture<InstafaceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstafaceUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstafaceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
