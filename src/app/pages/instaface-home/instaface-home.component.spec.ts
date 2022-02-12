import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstafaceHomeComponent } from './instaface-home.component';

describe('InstafaceHomeComponent', () => {
  let component: InstafaceHomeComponent;
  let fixture: ComponentFixture<InstafaceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstafaceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstafaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
