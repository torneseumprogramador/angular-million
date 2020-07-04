import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbCrudComponent } from './cdb-crud.component';

describe('CdbCrudComponent', () => {
  let component: CdbCrudComponent;
  let fixture: ComponentFixture<CdbCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdbCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdbCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
