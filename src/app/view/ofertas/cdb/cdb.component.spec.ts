import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbComponent } from './cdb.component';

describe('CdbComponent', () => {
  let component: CdbComponent;
  let fixture: ComponentFixture<CdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
