import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterMaskComponent } from './login-register-mask.component';

describe('MaskComponent', () => {
  let component: LoginRegisterMaskComponent;
  let fixture: ComponentFixture<LoginRegisterMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
