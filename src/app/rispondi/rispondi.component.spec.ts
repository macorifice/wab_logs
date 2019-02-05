import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RispondiComponent } from './rispondi.component';

describe('RispondiComponent', () => {
  let component: RispondiComponent;
  let fixture: ComponentFixture<RispondiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RispondiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RispondiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
