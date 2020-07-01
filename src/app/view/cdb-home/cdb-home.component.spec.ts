import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbHomeComponent } from './cdb-home.component';

describe('CdbHomeComponent', () => {
  let component: CdbHomeComponent;
  let fixture: ComponentFixture<CdbHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdbHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
