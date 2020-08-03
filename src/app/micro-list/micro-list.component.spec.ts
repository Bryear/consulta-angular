import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroListComponent } from './micro-list.component';

describe('MicroListComponent', () => {
  let component: MicroListComponent;
  let fixture: ComponentFixture<MicroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
