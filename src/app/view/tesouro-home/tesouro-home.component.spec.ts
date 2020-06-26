import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesouroHomeComponent } from './tesouro-home.component';

describe('TesouroHomeComponent', () => {
  let component: TesouroHomeComponent;
  let fixture: ComponentFixture<TesouroHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesouroHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
