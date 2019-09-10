import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntendenciasComponent } from './intendencias.component';

describe('IntendenciasComponent', () => {
  let component: IntendenciasComponent;
  let fixture: ComponentFixture<IntendenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntendenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntendenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
