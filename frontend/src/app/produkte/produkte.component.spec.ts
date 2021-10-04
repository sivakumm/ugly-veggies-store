import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukteComponent } from './produkte.component';

describe('ProdukteComponent', () => {
  let component: ProdukteComponent;
  let fixture: ComponentFixture<ProdukteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdukteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
