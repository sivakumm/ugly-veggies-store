import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProdukteComponent } from './display-produkte.component';

describe('DisplayProdukteComponent', () => {
  let component: DisplayProdukteComponent;
  let fixture: ComponentFixture<DisplayProdukteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProdukteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProdukteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
