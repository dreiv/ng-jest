import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JestLibComponent } from './jest-lib.component';

describe('JestLibComponent', () => {
  let component: JestLibComponent;
  let fixture: ComponentFixture<JestLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JestLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
