import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicevutiComponent } from './ricevuti.component';

describe('RicevutiComponent', () => {
  let component: RicevutiComponent;
  let fixture: ComponentFixture<RicevutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicevutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicevutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
