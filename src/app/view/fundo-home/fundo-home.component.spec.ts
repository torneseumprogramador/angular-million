import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoHomeComponent } from './fundo-home.component';

describe('FundoHomeComponent', () => {
  let component: FundoHomeComponent;
  let fixture: ComponentFixture<FundoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
