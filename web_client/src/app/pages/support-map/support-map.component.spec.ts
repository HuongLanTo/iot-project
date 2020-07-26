import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportMapComponent } from './support-map.component';

describe('SupportMapComponent', () => {
  let component: SupportMapComponent;
  let fixture: ComponentFixture<SupportMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
