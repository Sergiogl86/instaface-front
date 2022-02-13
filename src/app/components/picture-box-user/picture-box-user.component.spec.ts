import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureBoxUserComponent } from './picture-box-user.component';

describe('PictureBoxUserComponent', () => {
  let component: PictureBoxUserComponent;
  let fixture: ComponentFixture<PictureBoxUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureBoxUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBoxUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
