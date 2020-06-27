import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNodeComponent } from './new-node.component';

describe('NewNodeComponent', () => {
  let component: NewNodeComponent;
  let fixture: ComponentFixture<NewNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
