import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingNodeComponent } from './pending-node.component';

describe('PendingNodeComponent', () => {
  let component: PendingNodeComponent;
  let fixture: ComponentFixture<PendingNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
