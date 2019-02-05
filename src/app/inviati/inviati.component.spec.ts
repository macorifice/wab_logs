import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviatiComponent } from './inviati.component';

describe('InviatiComponent', () => {
  let component: InviatiComponent;
  let fixture: ComponentFixture<InviatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
