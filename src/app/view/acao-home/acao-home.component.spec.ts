import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoHomeComponent } from './acao-home.component';

describe('AcaoHomeComponent', () => {
  let component: AcaoHomeComponent;
  let fixture: ComponentFixture<AcaoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
