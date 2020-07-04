import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUserComponent } from './pending-user.component';

describe('PendingUserComponent', () => {
  let component: PendingUserComponent;
  let fixture: ComponentFixture<PendingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
