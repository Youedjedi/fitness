import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConfirmmessageComponent } from './app-confirmmessage.component';

describe('AppConfirmmessageComponent', () => {
  let component: AppConfirmmessageComponent;
  let fixture: ComponentFixture<AppConfirmmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppConfirmmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppConfirmmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
