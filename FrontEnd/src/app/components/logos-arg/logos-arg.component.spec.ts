import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosARGComponent } from './logos-arg.component';

describe('LogosARGComponent', () => {
  let component: LogosARGComponent;
  let fixture: ComponentFixture<LogosARGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosARGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosARGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
