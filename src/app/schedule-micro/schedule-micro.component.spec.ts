import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMicroComponent } from './schedule-micro.component';

describe('ScheduleMicroComponent', () => {
  let component: ScheduleMicroComponent;
  let fixture: ComponentFixture<ScheduleMicroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleMicroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
