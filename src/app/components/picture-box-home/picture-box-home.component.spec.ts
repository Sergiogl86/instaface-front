import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureBoxHomeComponent } from './picture-box-home.component';

describe('PictureBoxHomeComponent', () => {
  let component: PictureBoxHomeComponent;
  let fixture: ComponentFixture<PictureBoxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureBoxHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBoxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
