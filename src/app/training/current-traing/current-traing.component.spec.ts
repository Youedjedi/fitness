import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTraingComponent } from './current-traing.component';

describe('CurrentTraingComponent', () => {
  let component: CurrentTraingComponent;
  let fixture: ComponentFixture<CurrentTraingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTraingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTraingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
